'use client'

import { Provider as JotaiProvider } from 'jotai'

import { NextUIProvider } from '@nextui-org/react'

export interface ProvidersProps {
  children: React.ReactNode
}

/**
 *
 * @param root0
 * @param root0.children
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <JotaiProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </JotaiProvider>
  )
}
