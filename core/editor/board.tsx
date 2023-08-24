'use client'

import clsx from 'clsx'
import { colord } from 'colord'
import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai'

import type { PropsWithChildren, ReactNode } from 'react'

import { boardBackgroundColorAtom, boardBackgroundImageAtom, boardPaddingAtom } from './store'

export type BoardProps = {
  className?: string
  extra?: ReactNode
}

export const Board = ({ children, className }: PropsWithChildren<BoardProps>) => {
  const { x, y } = useAtomValue(boardPaddingAtom)
  const backgroundColor = useAtomValue(boardBackgroundColorAtom)
  const backgroundImage = useAtomValue(boardBackgroundImageAtom)

  return (
    <div
      style={{
        backgroundColor: colord(backgroundColor).toHex(),
        backgroundImage,
        padding: `${y}px ${x}px`,
      }}
      className={clsx(className, 'relative flex max-h-[80vh] max-w-[60vw] items-center justify-center')}
      id="board"
    >
      {children}
    </div>
  )
}

Board.displayName = 'Board'
