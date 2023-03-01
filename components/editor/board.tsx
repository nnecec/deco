import type { PropsWithChildren, ReactNode } from 'react'
import { useEffect,useRef, useState } from 'react'
import clsx from 'clsx'

export type BoardProps = {
  extra?: ReactNode
  className?: string
}
export const Board = ({
  extra,
  children,
  className,
}: PropsWithChildren<BoardProps>) => {
  const [, rerender] = useState(0)

  return <div className={clsx(className, 'flex items-center justify-center')}>{children}</div>
}
