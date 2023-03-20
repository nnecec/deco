import { forwardRef } from 'react'
import { VisuallyHidden } from 'react-aria'

import { useRadio } from './use-radio'

import type { UseRadioProps } from './use-radio'

export type RadioProps = Omit<UseRadioProps, 'ref'>

export const Radio = forwardRef<any, RadioProps>((props, ref) => {
  const { Component, children, getBaseProps, getWrapperProps, getInputProps, getLabelProps } =
    useRadio({ ref, ...props })

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div {...getWrapperProps()}>{children && <div {...getLabelProps()}>{children}</div>}</div>
    </Component>
  )
})

Radio.displayName = 'Radio'
