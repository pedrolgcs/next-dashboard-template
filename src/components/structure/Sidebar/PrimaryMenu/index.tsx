import {
  IconChartLine,
  IconFlag,
  IconHome,
  IconSquareCheck,
  IconStack2,
  IconUsers,
} from '@tabler/icons-react'
import { Accordion } from '@/components/ui'
import * as NavGroup from '../NavGroup'
import { NavItem } from '../NavItem'

function PrimaryMenu() {
  return (
    <Accordion.Root type="single" collapsible>
      <nav className="space-y-0.5">
        <NavItem href="/" icon={IconHome}>
          Option 1
        </NavItem>

        <NavItem href="#" icon={IconChartLine}>
          Option 2
        </NavItem>

        <NavGroup.Root title="Option 3" icon={IconStack2}>
          <NavGroup.Item href="#">Option 1</NavGroup.Item>
          <NavGroup.Item href="#">Option 2</NavGroup.Item>
          <NavGroup.Item href="#">Option 3</NavGroup.Item>
        </NavGroup.Root>

        <NavItem href="#" icon={IconSquareCheck}>
          Option 4
        </NavItem>

        <NavGroup.Root title="Option 5" icon={IconFlag}>
          <NavGroup.Item href="#">Option 1</NavGroup.Item>
          <NavGroup.Item href="#">Option 2</NavGroup.Item>
          <NavGroup.Item href="#">Option 3</NavGroup.Item>
        </NavGroup.Root>

        <NavItem href="#" icon={IconUsers}>
          Option 6
        </NavItem>
      </nav>
    </Accordion.Root>
  )
}

export { PrimaryMenu }
