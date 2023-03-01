import type { PropsWithChildren } from 'react'
import React, { useMemo, useState } from 'react'
import clsx from 'clsx'

export type FramerProps = {
  className?: string
}

export const Framer = ({
  children,
  className,
}: PropsWithChildren<FramerProps>) => {
  return <div className={clsx(className)}>{children}</div>
}
