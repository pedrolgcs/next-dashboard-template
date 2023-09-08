import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/structure'
import { cn } from '@/lib/tw-merge'
import { ThemeProvider } from './theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Dashboard',
  description: 'Next Dashboard template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div
            className={cn(
              'min-h-screen bg-white text-zinc-900',
              'lg:grid lg:grid-cols-app',
              'dark:bg-zinc-900 dark:text-zinc-100',
            )}
          >
            <Sidebar />

            <main className={cn('max-w-[100vw]', 'lg:col-start-2')}>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
