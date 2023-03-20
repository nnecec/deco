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

import type { Ref } from 'react'
import type { AriaSliderProps } from 'react-aria'
import type { SliderStateOptions } from 'react-stately'

import type { As, PropGetter } from '../types'

export type UseSliderProps = AriaSliderProps &
  Omit<SliderStateOptions<number | number[]>, 'numberFormatter'> & {
    ref?: Ref<HTMLElement>
    as?: As
  }
export const useSlider = ({ ref, as, ...props }: UseSliderProps) => {
  const trackRef = useRef(null)
  const numberFormatter = useNumberFormatter()
  const state = useSliderState({ ...props, numberFormatter })
  const { groupProps, trackProps, labelProps, outputProps } = useAriaSlider(props, state, trackRef)

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
      className: `block mb-2 text-sm font-medium text-gray-900 dark:text-white ${state.orientation}`,
    }
  }
  const getLabelProps: PropGetter = () => {
    return {
      className: 'relative text-neutral-500',
      ...labelProps,
    }
  }
  const getOutputProps: PropGetter = () => {
    return {
      ...outputProps,
      children: state.getThumbValueLabel(0),
    }
  }

  const getWrapperProps: PropGetter = () => {
    return {
      className: `relative flex h-5 w-full touch-none items-center`,
    }
  }

  const getTrackProps: PropGetter = () => {
    return {
      ...trackProps,
      ref: trackRef,
      className: clsx(
        `relative h-1 w-full grow cursor-pointer appearance-none rounded-full bg-neutral-200 dark:bg-primary`,
        state.isDisabled ? 'opacity-50' : '',
      ),
    }
  }

  const getThumbProps: PropGetter = () => {
    return {
      ...thumbProps,
      className: clsx(`block h-5 w-5 rounded-full bg-neutral-900 dark:bg-neutral-100`),
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
    getBaseProps,
    getLabelProps,
    getOutputProps,
    getWrapperProps,
    getTrackProps,
    getThumbProps,
    getInputProps,
  }
}
