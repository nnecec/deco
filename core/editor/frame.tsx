import { createElement, useLayoutEffect } from 'react'
import clsx from 'clsx'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useAtom } from 'jotai'

import type { HTMLMotionProps } from 'framer-motion'
import type { PropsWithChildren } from 'react'

import { frameModeAtom, frameScaleAtom } from './store'
import { useFrameMode } from './tools'

export type FrameProps = {
  className?: string
}

export const Frame = ({ children, className }: PropsWithChildren<FrameProps>) => {
  const [frameMode] = useAtom(frameModeAtom)
  const [frameScale] = useAtom(frameScaleAtom)

  const [modes] = useFrameMode()

  const mode = modes[frameMode]
  const { frame } = mode ?? {}

  return (
    <motion.div
      className={clsx(className, 'relative', frame?.className)}
      style={{
        scale: 1 - frameScale / 250,
      }}
    >
      <div>{children}</div>

      {frame?.items?.map(item => {
        return createElement(
          item.component ?? motion.div,
          {
            drag: true,
            dragMomentum: false,
            ...item.props,
          } as HTMLMotionProps<'div'>,
          item.children,
        )
      })}
    </motion.div>
  )
}
