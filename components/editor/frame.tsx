import clsx from 'clsx'

import type { PropsWithChildren } from 'react'

export type FramerProps = {
  className?: string
}

export const Frame = ({ children, className }: PropsWithChildren<FramerProps>) => {
  return <div className={clsx(className, 'relative')}>{children}</div>
}
