import type { Ref } from 'react'
import { useRef } from 'react'
import type { AriaSliderProps } from 'react-aria'
import {
  mergeProps,
  useFocusRing,
  useNumberFormatter,
  useSlider as useAriaSlider,
  useSliderThumb,
} from 'react-aria'
import type { SliderStateOptions } from 'react-stately'
import { useSliderState } from 'react-stately'

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
      ...labelProps,
    }
  }
  const getOutputProps: PropGetter = () => {
    return {
      ...outputProps,
      children: state.getThumbValueLabel(0),
    }
  }

  const getTrackProps: PropGetter = () => {
    return {
      ...trackProps,
      ref: trackRef,
      className: `w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 ${
        state.isDisabled ? 'disabled' : ''
      }`,
    }
  }

  const getThumbProps: PropGetter = () => {
    return {
      ...thumbProps,
      className: `w-4 h-4 rounded-full bg-black ${isFocusVisible ? 'focus' : ''} ${
        isDragging ? 'dragging' : ''
      }`,
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
    getTrackProps,
    getThumbProps,
    getInputProps,
  }
}
