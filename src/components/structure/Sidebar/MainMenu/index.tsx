import { IconChartLine, IconHome } from '@tabler/icons-react'
import { Accordion } from '@/components/ui'
import { NavItem } from './NavItem'

function MainMenu() {
  return (
    <Accordion.Root type="single" collapsible>
      <nav className="space-y-0.5">
        <NavItem href="/" icon={IconHome}>
          Home
        </NavItem>

        <NavItem href="#" icon={IconChartLine}>
          Dashboard
        </NavItem>
      </nav>
    </Accordion.Root>
  )
}

export { MainMenu }
