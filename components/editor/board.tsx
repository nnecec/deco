import { CSSProperties, PropsWithChildren, ReactNode, useEffect, useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useAtom } from 'jotai'

import { boardAspectRatioAtom, boardBackgroundAtom, photoSrcAtom } from './store'
import { prominent } from '../color'

export type BoardProps = {
  extra?: ReactNode
  className?: string
}

export const Board = ({ children, className }: PropsWithChildren<BoardProps>) => {
  const [aspectRatio] = useAtom(boardAspectRatioAtom)
  const [photo] = useAtom(photoSrcAtom)
  const [background, setBackground] = useAtom(boardBackgroundAtom)
  const [colors, setColors] = useState([])

  useEffect(() => {
    if (photo) {
      prominent(photo, { format: 'hex' }).then(colors => {
        setColors(colors)
      })
    }
  }, [photo])

  return (
    <motion.div
      className={clsx(className, 'relative flex items-center justify-center')}
      style={
        {
          aspectRatio,
          background: `linear-gradient(45deg, ${colors[0]},${colors[1]}, ${colors[2]})`,
        } as CSSProperties
      }
    >
      {children}
    </motion.div>
  )
}
