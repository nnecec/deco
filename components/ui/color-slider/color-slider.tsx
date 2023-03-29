import { forwardRef } from 'react'

import { Slider } from '..'

import { useColorSlider } from './use-color-slider'

export const ColorSlider = forwardRef<HTMLElement, any>((props, ref) => {
  const { getSliderProps } = useColorSlider({ ref, ...props })

  return <Slider {...getSliderProps()} />
})

ColorSlider.displayName = 'ColorSlider'
