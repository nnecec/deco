import type { PropsWithChildren, ReactNode } from 'react'
import clsx from 'clsx'

export type BoardProps = {
  extra?: ReactNode
  className?: string
}
export const Board = ({
  children,
  className,
}: PropsWithChildren<BoardProps>) => {
  return (
    <div className={clsx(className, 'flex items-center justify-center')}>
      {children}
    </div>
  )
}
