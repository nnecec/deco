import type { Ref } from 'react'

import type { SliderProps } from '..'
import type { As, PropGetter } from '../types'

export type UseColorSliderProps = SliderProps & {
  ref?: Ref<HTMLElement>
  as?: As
}
export const useColorSlider = ({ ref, as, ...props }: UseColorSliderProps) => {
  const Component = as || 'div'

  const getSliderProps: PropGetter = () => {
    return {
      ...props,
      ref,
      classNames: {
        track: 'h-5 bg-gradient-to-r from-black to-white bg-transparent',
        thumb: 'top-2.5 h-5 w-5 border-2 border-white',
      },
      styles: {
        thumb: {},
      },
    }
  }

  return {
    Component,
    getSliderProps,
  }
}
