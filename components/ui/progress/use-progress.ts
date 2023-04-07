import { useProgressBar } from 'react-aria'

import type { Ref } from 'react'
import type { AriaProgressBarProps } from 'react-aria'

import type { As, PropGetter } from '../types'

export type UseProgressProps = AriaProgressBarProps & {
  ref?: Ref<HTMLElement>
  as?: As
}
export const useProgress = ({ ref, as, ...props }: UseProgressProps) => {
  const { label = 'progress-bar', value, minValue = 0, maxValue = 100 } = props
  const { progressBarProps, labelProps } = useProgressBar({ ...props, label })

  const percentage = value ? (value - minValue) / (maxValue - minValue) : 0
  const barWidth = `${Math.round(percentage * 100)}%`

  const Component = as || 'div'

  const getProgressBarProps: PropGetter = () => {
    return {
      ...progressBarProps,
      ...labelProps,
      ref,
      className: `h-3 w-full overflow-hidden rounded-full bg-gray-900`,
    }
  }

  const getProgressProps: PropGetter = () => {
    return {
      className: 'h-full duration-300 ease-in-out bg-white',
      style: { width: barWidth },
    }
  }

  return {
    Component,
    getProgressBarProps,
    getProgressProps,
  }
}