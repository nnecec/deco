'use client'

import { Provider as JotaiProvider } from 'jotai'

export interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <JotaiProvider>{children}</JotaiProvider>
}
