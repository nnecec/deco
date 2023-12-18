import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

// https://github.com/whatwg/fetch/issues/905#issuecomment-491970649
const mergeSignal = (signals: AbortSignal[]) => {
  const controller = new AbortController()
  const onAbort = () => {
    controller.abort()
    for (const signal of signals) {
      signal.removeEventListener('abort', onAbort)
    }
  }
  for (const signal of signals) {
    if (signal.aborted) {
      onAbort()
      break
    }
    signal.addEventListener('abort', onAbort)
  }
  return controller.signal
}

const isSupported = () => Boolean(typeof window !== 'undefined' && 'EyeDropper' in window && window.EyeDropper)

const resolveError = () => {
  let error = 'Unsupported browser.'
  // istanbul ignore next
  if (process.env.NODE_ENV !== 'production') {
    error =
      'Unsupported browser: no EyeDropper in Window. Check https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API.'
  }
  throw new Error(error)
}

const createInstance = () => {
  if (isSupported()) return new window.EyeDropper()
  return null
}

const useIsSupported = () => {
  const mounted = useRef<boolean>()
  const [supported, setSupported] = useState(false)

  useEffect(() => {
    mounted.current = true
    setSupported(isSupported())
    return () => {
      mounted.current = false
    }
  }, [])

  return [mounted, supported] as const
}

const createHelpers = () => {
  const dropper = createInstance()
  if (!dropper) return resolveError
  return window.EyeDropper.prototype.open.bind(dropper)
}

export const useEyeDropper = () => {
  const openPicker = useMemo(() => createHelpers(), [])
  const [mounted, isSupported] = useIsSupported()
  const controller = useRef<AbortController>()

  const close = useCallback(() => {
    if (controller.current === undefined) return
    controller.current.abort()
  }, [controller])

  const open = useCallback(
    async (options: EyeDropperOpenOptions = {}) => {
      const { signal } = options
      close()
      const newController = new AbortController()
      controller.current = newController
      const unionSignal = signal === undefined ? newController.signal : mergeSignal([signal, newController.signal])
      try {
        const results = await openPicker({ signal: unionSignal })
        return results
      } catch (error: any) {
        if (!mounted.current) error.canceled = true
        throw error
      }
    },
    [controller, mounted, close, openPicker],
  )
  useEffect(() => close, [close])
  return { close, isSupported, open }
}
