import type { RefObject } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { useEventListener } from '~/hooks/use-event-listener'

interface Position {
  x: number
  y: number
}

export function useDraggable({ onDrag } = {}): [
  RefObject<HTMLElement>,
  Position,
] {
  const targetRef = useRef<HTMLElement>(null)

  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [delta, setDelta] = useState<Position>({ x: 0, y: 0 })
  const press = useRef<Position>()
  const init = useRef<Position>()

  const start = (e: PointerEvent) => {
    if (targetRef.current !== e.target) return

    const rect = targetRef.current?.getBoundingClientRect()
    press.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
    init.current = {
      x: e.clientX - delta.x,
      y: e.clientY - delta.y,
    }
  }
  const move = (e: PointerEvent) => {
    if (!press.current) return
    setPosition({
      x: e.clientX - press.current.x,
      y: e.clientY - press.current.y,
    })
    setDelta({
      x: e.clientX - init.current.x,
      y: e.clientY - init.current.y,
    })

    onDrag?.({ delta })
  }
  const end = (e: PointerEvent) => {
    if (!press.current) return
    press.current = undefined
    init.current = undefined
  }

  useEventListener('pointerdown', start)
  useEventListener('pointermove', move)
  useEventListener('pointerup', end)

  return [targetRef, delta]
}
