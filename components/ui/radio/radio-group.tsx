import { forwardRef } from 'react'

import { RadioContext } from './context'
import { useRadioGroup } from './use-radio-group'

import type { UseRadioGroupProps } from './use-radio-group';

export type RadioGroupProps = Omit<UseRadioGroupProps, 'ref'>

export const RadioGroup = forwardRef<any, RadioGroupProps>((props, ref) => {
  const {
    Component,
    children,
    label,
    context,
    getRadioGroupProps,
    getLabelProps,
    getWrapperProps,
  } = useRadioGroup({ ref, ...props })

  return (
    <Component {...getRadioGroupProps()}>
      {label && <label {...getLabelProps()}>{label}</label>}
      {
        <div {...getWrapperProps()}>
          <RadioContext.Provider value={context}>{children}</RadioContext.Provider>
        </div>
      }
    </Component>
  )
})

RadioGroup.displayName = 'RadioGroup'