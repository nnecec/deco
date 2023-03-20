import { forwardRef } from 'react'
import { VisuallyHidden } from 'react-aria'

import { useSlider } from './use-slider'

import type { UseSliderProps } from './use-slider'

export type SliderProps = Omit<UseSliderProps, 'ref'>

export const Slider = forwardRef<HTMLLabelElement, SliderProps>((props, ref) => {
  const {
    Component,
    getBaseProps,
    getLabelProps,
    getWrapperProps,
    getTrackProps,
    getThumbProps,
    getInputProps,
  } = useSlider({
    ref,
    ...props,
  })

  return (
    <Component {...getBaseProps()}>
      {props.label && (
        <div>
          <label {...getLabelProps()}>{props.label}</label>
        </div>
      )}
      <div {...getWrapperProps()}>
        <div {...getTrackProps()}>
          <div {...getThumbProps()}>
            <VisuallyHidden>
              <input {...getInputProps()} />
            </VisuallyHidden>
          </div>
        </div>
      </div>
    </Component>
  )
})

Slider.displayName = 'Slider'
