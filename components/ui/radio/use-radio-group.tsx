import { useMemo } from 'react'
import { mergeProps, useRadioGroup as useAriaRadioGroup } from 'react-aria'
import { useRadioGroupState } from 'react-stately'
import clsx from 'clsx'

import type { CSSProperties, ReactNode, Ref } from 'react'
import type { AriaRadioGroupProps } from 'react-aria'
import type { RadioGroupProps } from 'react-stately'

import type { As, PropGetter } from '../types'

export type UseRadioGroupProps = AriaRadioGroupProps &
  RadioGroupProps & {
    ref?: Ref<HTMLElement>
    as?: As
    styles?: CSSProperties
    className?: string
    children?: ReactNode
  }

export function useRadioGroup({
  as,
  ref,
  styles,
  children,
  label,
  isDisabled = false,
  orientation = 'vertical',
  isRequired = false,
  validationState,
  className,
  ...props
}: UseRadioGroupProps) {
  const Component = as || 'div'

  const state = useRadioGroupState(props)

  const { labelProps, radioGroupProps } = useAriaRadioGroup(
    {
      ...props,
      'aria-label': typeof label === 'string' ? label : props['aria-label'],
      isRequired,
      orientation,
    },
    state,
  )

  const context = useMemo(
    () => ({
      state,
      isRequired,
      validationState,
      isDisabled,
      groupState: state,
    }),
    [state, isRequired, validationState, isDisabled],
  )

  const getRadioGroupProps: PropGetter = () => {
    return {
      ref,
      className: clsx(className, 'relative flex flex-col gap-2'),
      ...mergeProps(radioGroupProps, props),
    }
  }

  const getLabelProps: PropGetter = () => {
    return {
      className: 'relative text-neutral-500',
      ...labelProps,
    }
  }

  const getWrapperProps: PropGetter = () => {
    return {
      className: 'grid grid-cols-3 gap-2 data-[orientation=horizontal]:grid-cols-1',
      role: 'presentation',
      'data-orientation': orientation,
    }
  }

  return {
    Component,
    children,
    label,
    context,
    getRadioGroupProps,
    getLabelProps,
    getWrapperProps,
  }
}
