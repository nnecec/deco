import { VisuallyHidden } from 'react-aria'
import { UseRadioProps, useRadio } from './use-radio'
import { forwardRef } from 'react'

export interface RadioProps extends Omit<UseRadioProps, 'ref'> {}

export const Radio = forwardRef<any, any>((props, ref) => {
  const {
    Component,
    children,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio({ ref, ...props })

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>
      <div {...getLabelWrapperProps()}>
        {children && <div {...getLabelProps()}>{children}</div>}
      </div>
    </Component>
  )
})
