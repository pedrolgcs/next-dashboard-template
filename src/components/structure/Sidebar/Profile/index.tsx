import { IconLogout } from '@tabler/icons-react'
import { Avatar, Button } from '@/components/ui'
import { cn } from '@/lib/tw-merge'

function Profile() {
  return (
    <div className="flex items-center gap-3">
      <Avatar.Root className="inline-flex h-10 w-10 select-none items-center justify-center overflow-hidden rounded-full">
        <Avatar.Image
          className="h-full w-full object-cover"
          src="https://github.com/pedrolgcs.png"
          alt="Pedro H."
        />

        <Avatar.Fallback className="flex h-full w-full items-center justify-center bg-zinc-100 font-medium text-violet-500">
          PH
        </Avatar.Fallback>
      </Avatar.Root>

      <div className="flex flex-1 flex-col truncate">
        <span
          className={cn(
            'text-sm font-semibold text-zinc-700',
            'dark:text-zinc-100',
          )}
        >
          Pedro H.
        </span>
        <span
          className={cn('truncate text-sm text-zinc-500', 'dark:text-zinc-400')}
        >
          pedro.lg.cs@gmail.com
        </span>
      </div>

      <Button type="button" variant="ghost">
        <IconLogout className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}

export { Profile }
