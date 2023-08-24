import { createElement, useRef } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai'

import type { HTMLMotionProps } from 'framer-motion'
import type { PropsWithChildren } from 'react'

import { frameModeAtom, frameScaleAtom } from './store'
import { useFrameMode } from './tools'

export type FrameProps = {
  className?: string
}

export const Frame = ({ children, className }: PropsWithChildren<FrameProps>) => {
  const ref = useRef<HTMLDivElement>(null)
  const frameMode = useAtomValue(frameModeAtom)
  const frameScale = useAtomValue(frameScaleAtom)

  const [modes] = useFrameMode()

  const mode = modes[frameMode]
  const { frame } = mode ?? {}

  return (
    <div
      style={{
        scale: frameScale,
      }}
      className={clsx(className, 'relative', frame?.className)}
      id="frame"
      ref={ref}
    >
      {children}

      {frame?.items?.map((item: any) => {
        return createElement(
          item.component ?? motion.div,
          {
            drag: true,
            dragMomentum: false,
            ...item.props,
            className: 'hover:cursor-grab active:cursor-grabbing',
          } as HTMLMotionProps<'div'>,
          item.children,
        )
      })}
    </div>
  )
}
