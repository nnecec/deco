import { createContext } from 'react'

import type { RadioGroupState } from 'react-stately'

export type RadioGroupContext = {
  groupState: RadioGroupState
  isRequired?: boolean
  isDisabled?: boolean
  
}

export const RadioContext = createContext<RadioGroupContext | null>(null)