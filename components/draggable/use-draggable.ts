import { useRef, useState } from 'react'

import { useEventListener } from '~/components/use-event-listener'

import type { RefObject } from 'react'

interface Position {
  x: number
  y: number
}

export interface Props {
  onDrag?: (position: Position) => void
  axis?: 'x' | 'y'
}

export function useDraggable<T extends HTMLElement>({ onDrag, axis }: Props = {}): [
  RefObject<T>,
  { x: number; y: number; grabbing: boolean },
] {
  const targetRef = useRef<T>(null)
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const initialPosition = useRef<Position>() // when pointer down, update the position
  const prevPosition = useRef<Position>()
  const [grabbing, setGrabbing] = useState(false)

  const start = (e: PointerEvent) => {
    if (!targetRef.current || targetRef.current !== e.target) return
    if (e.type === 'touchstart') e.preventDefault()

    initialPosition.current = prevPosition.current
      ? {
          x: e.clientX - prevPosition.current.x,
          y: e.clientY - prevPosition.current.y,
        }
      : {
          x: e.clientX,
          y: e.clientY,
        }
    prevPosition.current = undefined
    setGrabbing(true)
  }
  const move = (e: PointerEvent) => {
    if (!initialPosition.current) return
    const position = {
      x: e.clientX - initialPosition.current.x,
      y: e.clientY - initialPosition.current.y,
    }
    setPosition(position)

    onDrag?.(position)
  }
  const end = (e: PointerEvent) => {
    if (!initialPosition.current) return

    prevPosition.current = {
      x: e.clientX - initialPosition.current.x,
      y: e.clientY - initialPosition.current.y,
    }
    initialPosition.current = undefined
    setGrabbing(false)
  }

  useEventListener('pointerdown', start)
  useEventListener('pointermove', move)
  useEventListener('pointerup', end)

  const { x, y } = axis
    ? {
        x: axis === 'x' ? position.x : undefined,
        y: axis === 'y' ? position.y : undefined,
      }
    : position

  return [
    targetRef,
    {
      x,
      y,
      grabbing,
    },
  ]
}
