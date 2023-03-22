import { forwardRef } from 'react'
import { VisuallyHidden } from 'react-aria'

import { useProgress } from './use-progress'

import type { UseProgressProps } from './use-progress'

export type ProgressProps = Omit<UseProgressProps, 'ref'>

export const Progress = forwardRef((props, ref) => {
  const { Component, getProgressBarProps, getProgressProps, getLabelProps, label } = useProgress({
    ref,
    ...props,
  })

  return (
    <Component {...getProgressBarProps()}>
      <VisuallyHidden>{label && <span {...getLabelProps()}>{label}</span>}</VisuallyHidden>
      <div {...getProgressProps()} />
    </Component>
  )
})

Progress.displayName = 'Progress'
