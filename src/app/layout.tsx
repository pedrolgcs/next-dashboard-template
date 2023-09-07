import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/tw-merge'
import { Providers } from './providers'

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
    <html lang="pt-br">
      <body className={inter.className}>
        <Providers>
          <div
            className={cn(
              'min-h-screen bg-zinc-100 text-zinc-900',
              'lg:grid lg:grid-cols-app',
              'dark:bg-zinc-900 dark:text-zinc-100',
            )}
          >
            <div>side bar</div>

            <main className="max-w-[100vw] p-4 lg:col-start-2 lg:px-8 lg:pb-12 lg:pt-8">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
