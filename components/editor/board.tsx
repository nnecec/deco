import { useMemo } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useAtom } from 'jotai'

import type { PropsWithChildren, ReactNode } from 'react'

import { boardAspectRatioAtom, boardBackgroundColorAtom, boardBackgroundImageAtom } from './store'

export type BoardProps = {
  extra?: ReactNode
  className?: string
}

export const Board = ({ children, className }: PropsWithChildren<BoardProps>) => {
  const [aspectRatio] = useAtom(boardAspectRatioAtom)
  const [backgroundColor, setBackgroundColor] = useAtom(boardBackgroundColorAtom)
  const [backgroundImage, setBackgroundImage] = useAtom(boardBackgroundImageAtom)

  return (
    <motion.div
      id="board"
      className={clsx(className, 'relative flex items-center justify-center')}
      style={{
        aspectRatio,
        backgroundColor,
        backgroundImage,
      }}
    >
      {children}
    </motion.div>
  )
}
