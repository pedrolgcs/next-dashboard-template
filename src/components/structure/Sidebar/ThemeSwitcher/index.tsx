'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import * as Switch from '@radix-ui/react-switch'
import { IconMoonStars, IconSunHigh } from '@tabler/icons-react'
import { cn } from '@/lib/tw-merge'

function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Switch.Root
      onCheckedChange={handleToggleTheme}
      className={cn(
        'inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full border border-zinc-300 transition duration-200 disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-zinc-100 data-[state=unchecked]:bg-zinc-100',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        'dark:border-zinc-700 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-950 dark:data-[state=unchecked]:bg-zinc-800',
      )}
    >
      <Switch.Thumb
        className={cn(
          'pointer-events-none flex h-5 w-5 items-center justify-center transition-transform duration-500',
          'data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0.5 data-[state=checked]:rotate-[360deg]',
        )}
      >
        {theme === 'dark' ? (
          <IconSunHigh className="h-4 w-4 text-yellow-400" />
        ) : (
          <IconMoonStars className="h-4 w-4 text-zinc-600" />
        )}
      </Switch.Thumb>
    </Switch.Root>
  )
}

export { ThemeSwitcher }
