import { createElement } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
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
      style={{
        scale: 1 - frameScale / 250,
      }}
      className={clsx(className, 'relative', frame?.className)}
      id="frame"
    >
      {children}

      {frame?.items?.map((item: any) => {
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
