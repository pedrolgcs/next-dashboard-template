import * as React from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { cn } from '@/lib/tw-merge'

const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold shadow-sm outline-none transition',
    'focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2',
    'active:opacity-80',
  ],

  variants: {
    variant: {
      primary: cn(
        'bg-violet-600 text-white hover:bg-violet-700',
        'dark:bg-violet-500 dark:hover:bg-violet-600',
      ),
      ghost: cn(
        'rounded-md px-2 text-zinc-500 shadow-none hover:bg-zinc-50',
        'dark:text-zinc-300 dark:hover:bg-zinc-800',
      ),
      outline: cn(
        'border border-zinc-300 text-zinc-700 hover:bg-zinc-50',
        'dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-white/5',
      ),
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonProps = React.ComponentProps<'button'> & VariantProps<typeof button>

function Button({ variant, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, className })} />
}

export { Button }
