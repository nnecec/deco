import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useAtom } from 'jotai'

import type { PropsWithChildren, ReactNode } from 'react'

import { boardAspectRatioAtom, boardBackgroundAtom } from './store'

export type BoardProps = {
  extra?: ReactNode
  className?: string
}

export const Board = ({ children, className }: PropsWithChildren<BoardProps>) => {
  const [aspectRatio] = useAtom(boardAspectRatioAtom)
  const [background, setBackground] = useAtom(boardBackgroundAtom)

  return (
    <motion.div
      id="board"
      className={clsx(className, 'relative flex items-center justify-center')}
      style={{
        aspectRatio,
        // background: `linear-gradient(45deg, ${colors[0]}, ${colors[2]})`,
        background,
      }}
    >
      {children}
    </motion.div>
  )
}
