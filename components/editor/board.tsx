import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useAtom } from 'jotai'

import type { PropsWithChildren, ReactNode } from 'react'

import { frameAspectRatioAtom } from './store'

export type BoardProps = {
  extra?: ReactNode
  className?: string
}

export const Board = ({ children, className }: PropsWithChildren<BoardProps>) => {
  const [aspectRatio] = useAtom(frameAspectRatioAtom)
  return (
    <motion.div
      className={clsx(className, 'relative flex items-center justify-center bg-white')}
      // layout
      style={{
        aspectRatio,
      }}
    >
      {children}
    </motion.div>
  )
}