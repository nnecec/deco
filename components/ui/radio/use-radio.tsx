import { useContext, useId, useMemo, useRef } from 'react'
import { mergeProps, useFocusRing, useHover, useRadio as useAriaRadio } from 'react-aria'
import clsx from 'clsx'

import type { CSSProperties, ReactNode, Ref } from 'react'
import type { AriaRadioProps } from 'react-aria'
import type { RadioGroupState } from 'react-stately'

import { RadioContext } from './context'

import type { As, PropGetter } from '../types'

export type UseRadioProps = AriaRadioProps &
  RadioGroupState & {
    ref?: Ref<HTMLElement>
    as?: As
    styles?: CSSProperties
    className?: string
    children?: ReactNode
  }

export const useRadio = ({
  as,
  ref,
  styles,
  id,
  value,
  children,
  isDisabled: isDisabledProp,
  autoFocus = false,
  className,
  ...props
}: UseRadioProps) => {
  const groupContext = useContext(RadioContext)

  const Component = as || 'label'

  const inputRef = useRef<HTMLInputElement>(null)

  const labelId = useId()
  const inputUseId = useId()
  const inputId = id || inputUseId

  const isDisabled = useMemo(
    () => isDisabledProp || groupContext?.isDisabled || false,
    [isDisabledProp],
  )

  const { inputProps } = useAriaRadio(
    {
      value,
      children,
      isDisabled,
      id: inputId,
      'aria-label':
        props['aria-label'] || typeof children === 'string' ? (children as string) : undefined,
      'aria-labelledby': props['aria-labelledby'] || labelId,

      ...groupContext,
    },
    groupContext!.groupState,
    inputRef,
  )

  const isSelected = useMemo(() => inputProps.checked, [inputProps.checked])

  const { hoverProps, isHovered } = useHover({ isDisabled })

  const { focusProps, isFocused, isFocusVisible } = useFocusRing({
    autoFocus,
  })
  const getBaseProps: PropGetter = (props = {}) => {
    return {
      ...props,
      ref,
      className: clsx(className, 'relative cursor-pointer'),
      ...mergeProps(hoverProps, props),
    }
  }

  const getWrapperProps: PropGetter = (props = {}) => {
    return {
      ...props,
      'data-hover': isHovered,
      'data-hover-unchecked': isHovered && !isSelected,
      'data-focus': isFocused,
      'data-focus-visible': isFocused && isFocusVisible,
      'data-disabled': isDisabled,
      'data-checked': isSelected,
      className: clsx(
        'flex items-center justify-center overflow-hidden border-2 border-neutral-500 p-2 data-[hover-unchecked=true]:bg-neutral-900',
        'data-[checked=true]:bg-neutral-800',
        'h-full w-full',
        'transition-background rounded-xl',
      ),
    }
  }

  const getInputProps: PropGetter = (props = {}) => {
    return {
      ...props,
      ref: inputRef,
      ...mergeProps(inputProps, focusProps),
    }
  }

  const getLabelProps: PropGetter = (props = {}) => ({
    ...props,
    id: labelId,
    htmlFor: inputId,
    className: 'block text-sm font-medium text-neutral-200 text-base',
  })

  return {
    Component,
    children,
    styles,
    isSelected,
    isDisabled,
    isFocusVisible,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
  }
}
