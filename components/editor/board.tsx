import { useMemo } from 'react'
import clsx from 'clsx'
import { colord } from 'colord'
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
  const [backgroundColor] = useAtom(boardBackgroundColorAtom)
  const [backgroundImage] = useAtom(boardBackgroundImageAtom)

  return (
    <motion.div
      id="board"
      className={clsx(className, 'relative flex items-center justify-center')}
      style={{
        aspectRatio: `${aspectRatio.w}/${aspectRatio.h}`,
        backgroundColor: colord(backgroundColor).toHex(),
        backgroundImage,
      }}
    >
      {children}
    </motion.div>
  )
}
