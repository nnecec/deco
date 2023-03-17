import { forwardRef } from 'react'
import { VisuallyHidden } from 'react-aria'

import { useSlider } from './use-slider'

import type { UseSliderProps } from './use-slider'

export type SliderProps = Omit<UseSliderProps, 'ref'>

export const Slider = forwardRef<HTMLLabelElement, SliderProps>((props, ref) => {
  const { Component, getBaseProps, getLabelProps,getOutputProps, getTrackProps, getThumbProps, getInputProps } =
    useSlider({
      ref,
      ...props,
    })

  return (
    <Component {...getBaseProps()}>
      {props.label && (
        <div className="">
          <label {...getLabelProps()}>{props.label}</label>
          <output {...getOutputProps()} />
        </div>
      )}
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
