import type { RefObject } from 'react'
import { useEffect, useRef } from 'react'

type Options = Pick<AddEventListenerOptions, 'capture' | 'passive' | 'once'>

export const useEventListener = <T extends EventTarget>(
  eventName: keyof WindowEventMap,
  handler: (...args: any[]) => any,
  element?: RefObject<T> | T,
  options: Options = {},
) => {
  const handlerRef = useRef(handler)
  const { capture, passive, once } = options

  useEffect(() => {
    handlerRef.current = handler
  }, [handler])

  useEffect(() => {
    const target = element
      ? ('current' in element
        ? element.current
        : element)
      : (typeof document === 'undefined'
      ? undefined
      : document)

    if (!target) return

    target.addEventListener(eventName, handlerRef.current, {
      capture,
      passive,
      once,
    })

    return () => {
      target.removeEventListener(eventName, handlerRef.current, {
        capture,
      })
    }
  }, [capture, element, eventName, handler, once, passive])
}
