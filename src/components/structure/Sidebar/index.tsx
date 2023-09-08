'use client'

import { IconMenu2 } from '@tabler/icons-react'
import { Collapsible, Logo } from '@/components/ui'
import { cn } from '@/lib/tw-merge'
import { ThemeSwitcher } from './ThemeSwitcher'

function Sidebar() {
  return (
    <Collapsible.Root
      className={cn(
        'z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4',
        'lg:border-r',
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
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quia
          amet minus voluptatibus! Repellat beatae impedit voluptate natus. Non
          assumenda culpa officiis obcaecati dolorem unde vel perspiciatis
          consequatur iusto tenetur!
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

export { Sidebar }
