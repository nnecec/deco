'use client'

import { NextUIProvider } from '@nextui-org/react'
import { Provider as JotaiProvider } from 'jotai'

export interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <JotaiProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </JotaiProvider>
  )
}
