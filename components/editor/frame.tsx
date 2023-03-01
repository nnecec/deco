import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { useAtom } from 'jotai'

import { useDraggable } from '~/hooks/use-draggable'

import { frameXAtom, frameYAtom } from './store'

export type FramerProps = {
  className?: string
}

export const Frame = ({
  children,
  className,
}: PropsWithChildren<FramerProps>) => {
  const [frameY, setFrameY] = useAtom(frameYAtom)
  const [frameX, setFrameX] = useAtom(frameXAtom)
  const [yHandle, yDelta] = useDraggable({
    onDrag: ({ delta }) => {
      setFrameY(delta.y)
    },
  })
  const [xHandle, xDelta] = useDraggable({
    onDrag: ({ delta }) => {
      setFrameX(delta.x)
    },
  })

  return (
    <div
      className={clsx(className, 'relative')}
      style={{
        paddingTop: -frameY,
        paddingBottom: -frameY,
        paddingLeft: -frameX,
        paddingRight: -frameX,
      }}
    >
      <button
        ref={yHandle}
        className="absolute"
        style={{
          top: 0,
          left: '50%',
          touchAction: 'none',
          transform: `translate(0px, ${yDelta.y}px)`,
        }}
      >
        top
      </button>

      <button
        ref={xHandle}
        className="absolute"
        style={{
          left: 0,
          top: '50%',
          touchAction: 'none',
          transform: `translate(${xDelta.x}px, 0px)`,
        }}
      >
        left
      </button>

      {children}
    </div>
  )
}
