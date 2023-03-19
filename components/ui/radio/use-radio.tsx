import { RadioGroupState, useRadioGroupState } from 'react-stately'
import {
  AriaRadioProps,
  mergeProps,
  useFocusRing,
  useHover,
  useRadio as useAriaRadio,
} from 'react-aria'
import {
  createContext,
  CSSProperties,
  ReactNode,
  Ref,
  useContext,
  useId,
  useMemo,
  useRef,
} from 'react'
import { As, PropGetter } from '../types'
import { RadioContext } from './context'
import clsx from 'clsx'

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
  let groupContext = useContext(RadioContext)

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
    groupContext.groupState,
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
      className: 'relative max-w-fit inline-flex items-center justify-start cursor-pointer',
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
      className: clsx(
        'relative inline-flex items-center justify-center flex-shrink-0 overflow-hidden border-solid border-2 box-border border-neutral data-[hover-unchecked=true]:bg-neutral-700',
        'data-[checked=true]:border-primary',
        'w-5 h-5',
        'rounded-full transition-background',
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
    className: 'ml-2 block text-sm font-medium text-gray-700 dark:text-gray-400 text-base',
  })

  const getLabelWrapperProps: PropGetter = (props = {}) => ({
    ...props,
    className: 'flex flex-col ml-1 ml-1',
  })

  const getControlProps: PropGetter = (props = {}) => ({
    ...props,
    'data-disabled': isDisabled,
    'data-checked': isSelected,
    className: clsx(
      'z-10 w-2 h-2 opacity-0 scale-0 origin-center data-[checked=true]:opacity-100 data-[checked=true]:scale-100 bg-primary text-neutral-300',
      'w-2 h-2',
      'rounded-full transition-transform-opacity',
    ),
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
    getLabelWrapperProps,
    getControlProps,
  }
}
