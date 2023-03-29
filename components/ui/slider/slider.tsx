import { forwardRef } from 'react'
import { VisuallyHidden } from 'react-aria'

import { useSlider } from './use-slider'

import type { UseSliderProps } from './use-slider'

export type SliderProps = Omit<UseSliderProps, 'ref'>

export const Slider = forwardRef<HTMLLabelElement, SliderProps>((props, ref) => {
  const { Component, getBaseProps, getTrackProps, getThumbProps, getInputProps } = useSlider({
    ref,
    ...props,
  })

  return (
    <Component {...getBaseProps()}>
      <div {...getTrackProps()}>
        <div {...getThumbProps()}>
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
        </div>
      </div>
    </Component>
  )
})

Slider.displayName = 'Slider'
