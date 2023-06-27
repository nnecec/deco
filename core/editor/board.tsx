'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { colord } from 'colord'
import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai'

import type { PropsWithChildren, ReactNode } from 'react'

import { useEventListener } from '../utils/use-event-listener'

import { boardAspectRatioAtom, boardBackgroundColorAtom, boardBackgroundImageAtom } from './store'

export type BoardProps = {
  className?: string
  extra?: ReactNode
}

export const Board = ({ children, className }: PropsWithChildren<BoardProps>) => {
  const { w, h } = useAtomValue(boardAspectRatioAtom)
  const backgroundColor = useAtomValue(boardBackgroundColorAtom)
  const backgroundImage = useAtomValue(boardBackgroundImageAtom)
  const ref = useRef<HTMLDivElement>(null)
  return (
    <motion.div
      style={{
        aspectRatio: `${w} / ${h}`,
        backgroundColor: colord(backgroundColor).toHex(),
        backgroundImage,
      }}
      className={clsx(className, 'relative flex items-center justify-center overflow-hidden')}
      id="board"
      layout="size"
      ref={ref}
    >
      {children}
    </motion.div>
  )
}

Board.displayName = 'Board'
