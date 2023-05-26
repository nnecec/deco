import clsx from 'clsx'

import type { PropsWithChildren } from 'react'

export type FrameProps = {
  className?: string
}

export const Frame = ({ children, className }: PropsWithChildren<FrameProps>) => {
  return <div className={clsx(className, 'relative')}>{children}</div>
}
