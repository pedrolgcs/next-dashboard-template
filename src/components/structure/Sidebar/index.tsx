'use client'

import { IconMenu2, IconSearch } from '@tabler/icons-react'
import { Collapsible, Logo, Input } from '@/components/ui'
import { cn } from '@/lib/tw-merge'
import { PrimaryMenu } from './PrimaryMenu'
import { Profile } from './Profile'
import { SecondaryMenu } from './SecondayMenu'
import { ThemeSwitcher } from './ThemeSwitcher'

function Sidebar() {
  return (
    <Collapsible.Root
      className={cn(
        'flex flex-col gap-6 border-b border-zinc-200 bg-white p-4',
        'lg:fixed lg:inset-y-0 lg:w-80 lg:border-r lg:px-5 lg:py-8',
        'dark:border-zinc-700 dark:bg-zinc-900',
      )}
    >
      <div className="flex items-center justify-between">
        <Logo />

        <ThemeSwitcher />

        <Collapsible.Trigger asChild className="lg:hidden">
          <button>
            <IconMenu2 className="h-6 w-6" />
          </button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className={cn(
          'flex flex-1 flex-col gap-6 data-[state=closed]:hidden',
          'lg:data-[state=closed]:flex',
        )}
      >
        <Input.Root>
          <Input.Prefix>
            <IconSearch className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>

          <Input.Control id="search" placeholder="Search" />
        </Input.Root>

        <PrimaryMenu />

        <div className="mt-auto flex flex-col gap-6">
          <SecondaryMenu />

          <div className={cn('h-px bg-zinc-200', 'dark:bg-zinc-700')} />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

export { Sidebar }
