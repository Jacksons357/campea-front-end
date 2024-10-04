import { FaSignOutAlt } from 'react-icons/fa'
import NavLinks from './nav-links'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { ModeToggle } from './ui/mode-toggle'

export function SideNavDashboard() {
  return (
    <div>
      <nav className="w-56 border-r h-screen flex flex-col space-y-2 px-2">
        <div className="flex h-16 items-center text-sm justify-center">
          <span>Nome da Loja</span>
        </div>

        <Separator />

        <div className="flex flex-col flex-grow md:space-y-2">
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-md bg-muted-foreground/10 md:block" />
        </div>

        <form className="pb-2 flex items-center justify-between gap-2">
          <Button aria-label="Sair" variant="destructive" className="w-full">
            <div className="flex items-center gap-2">
              <FaSignOutAlt />
              Sair
            </div>
          </Button>
          <span>
            <ModeToggle />
          </span>
        </form>
      </nav>
    </div>
  )
}
