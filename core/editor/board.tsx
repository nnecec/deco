import { forwardRef } from 'react'
import clsx from 'clsx'
import { colord } from 'colord'
import { useAtom } from 'jotai'

import type { PropsWithChildren, ReactNode } from 'react'

import { boardAspectRatioAtom, boardBackgroundColorAtom, boardBackgroundImageAtom } from './store'

export type BoardProps = {
  extra?: ReactNode
  className?: string
}

/**
 * Board is the background component of bottom layer of the editor.
 * Renders a board component with specified aspectRatio, backgroundColor, and backgroundImage.
 *
 * @param {PropsWithChildren<BoardProps>} props - The props object with children and className properties.
 * @return {JSX.Element} The board component with given properties and children.
 */
export const Board = forwardRef(
  ({ children, className }: PropsWithChildren<BoardProps>, ref: React.Ref<HTMLDivElement>) => {
    const [aspectRatio] = useAtom(boardAspectRatioAtom)
    const [backgroundColor] = useAtom(boardBackgroundColorAtom)
    const [backgroundImage] = useAtom(boardBackgroundImageAtom)

    return (
      <div
        id="board"
        className={clsx(className, 'relative flex items-center justify-center')}
        style={{
          // aspectRatio: `${aspectRatio.w}/${aspectRatio.h}`,
          backgroundColor: colord(backgroundColor).toHex(),
          backgroundImage,
        }}
        ref={ref}
      >
        {children}
      </div>
    )
  },
)
Board.displayName = 'Board'
