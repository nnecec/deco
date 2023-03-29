import { useRef } from 'react'
import {
  mergeProps,
  useFocusRing,
  useNumberFormatter,
  useSlider as useAriaSlider,
  useSliderThumb,
} from 'react-aria'
import { useSliderState } from 'react-stately'
import clsx from 'clsx'

import type { CSSProperties, Ref } from 'react'
import type { AriaSliderProps } from 'react-aria'
import type { SliderStateOptions } from 'react-stately'

import type { As, PropGetter } from '../types'

export type UseSliderProps = AriaSliderProps &
  Omit<SliderStateOptions<number | number[]>, 'numberFormatter'> & {
    ref?: Ref<HTMLElement>
    as?: As
    classNames?: Record<string, string>
    styles?: Record<string, CSSProperties>
  }
export const useSlider = ({
  ref,
  as,
  styles,
  classNames,
  label = 'slider',
  ...props
}: UseSliderProps) => {
  const trackRef = useRef(null)
  const numberFormatter = useNumberFormatter()
  const state = useSliderState({ ...props, numberFormatter })
  const { groupProps, trackProps, labelProps, outputProps } = useAriaSlider(
    { label, ...props },
    state,
    trackRef,
  )

  const Component = as || 'label'

  const inputRef = useRef(null)
  const { thumbProps, inputProps, isDragging } = useSliderThumb(
    {
      index: 0,
      trackRef,
      inputRef,
    },
    state,
  )

  const { focusProps, isFocusVisible } = useFocusRing()

  const getBaseProps: PropGetter = () => {
    return {
      ...groupProps,
      ...labelProps,
      ...outputProps,
      className: clsx(
        `relative flex h-5 w-full touch-none items-center text-sm font-medium text-white ${state.orientation}`,
      ),
    }
  }

  const getTrackProps: PropGetter = () => {
    return {
      ...trackProps,
      ref: trackRef,
      className: clsx(
        `bg-primary relative h-1 w-full grow cursor-pointer appearance-none rounded-full`,
        state.isDisabled ? 'opacity-50' : '',
        classNames?.track,
      ),
    }
  }

  const getThumbProps: PropGetter = () => {
    return {
      ...thumbProps,
      className: clsx(
        `block h-5 w-5 rounded-full bg-neutral-100`,
        isDragging && 'bg-neutral-300',
        classNames?.thumb,
      ),
      style: {
        ...thumbProps.style,
        ...styles?.thumb,
      },
    }
  }

  const getInputProps: PropGetter = () => {
    return {
      ref: inputRef,
      ...mergeProps(inputProps, focusProps),
    }
  }

  return {
    Component,
    styles,
    classNames,
    getBaseProps,
    getTrackProps,
    getThumbProps,
    getInputProps,
  }
}
