import type { RefObject } from 'react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export interface Props {
  x?: number
  y?: number
}

export const useResizable = <T extends HTMLElement>({ x, y }: Props = {}): [
  RefObject<T>,
  number?,
  number?,
] => {
  const targetRef = useRef<T>(null)
  const initialRect = useRef<DOMRect>()

  const { width, height } = useMemo(() => {
    if (targetRef.current && !initialRect.current) {
      initialRect.current = targetRef.current?.getBoundingClientRect()
    }

    if (initialRect.current) {
      return {
        width: initialRect.current.width + (x ?? 0),
        height: initialRect.current.height + (y ?? 0),
      }
    }
    return {}
  }, [x, y])

  return [targetRef, width, height]
}
