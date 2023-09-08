'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system">
      {children}
    </NextThemesProvider>
  )
}

export { ThemeProvider }
