import { useEffect, useRef } from 'react'

import type { RefObject } from 'react'

type Options = Pick<AddEventListenerOptions, 'capture' | 'once' | 'passive'>

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
      once,
      passive,
    })

    return () => {
      target.removeEventListener(eventName, handlerRef.current, {
        capture,
      })
    }
  }, [capture, element, eventName, handler, once, passive])
}
