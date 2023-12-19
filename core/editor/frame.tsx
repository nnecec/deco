import type { HTMLMotionProps } from 'framer-motion'

import { createElement, useRef } from 'react'
import type { PropsWithChildren } from 'react'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai'

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
      className={clsx(className, 'relative', frame?.className)}
      id="frame"
      ref={ref}
      style={{
        scale: frameScale,
      }}
    >
      {children}

      {frame?.items?.map((item: any) => {
        return createElement(
          item.component ?? motion.div,
          {
            drag: true,
            dragMomentum: false,
            ...item.props,
            className: clsx(item.props.className, 'hover:cursor-grab active:cursor-grabbing'),
          } as HTMLMotionProps<'div'>,
          item.children,
        )
      })}
    </div>
  )
}
