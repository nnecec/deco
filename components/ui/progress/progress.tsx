import { forwardRef } from 'react'

import { useProgress } from './use-progress'

import type { UseProgressProps } from './use-progress'

export type ProgressProps = Omit<UseProgressProps, 'ref'>

export const Progress = forwardRef<HTMLElement, ProgressProps>((props, ref) => {
  const { Component, getProgressBarProps, getProgressProps } = useProgress({
    ref,
    ...props,
  })

  return (
    <Component {...getProgressBarProps()}>
      <div {...getProgressProps()} />
    </Component>
  )
})

Progress.displayName = 'Progress'
