import { FaSignOutAlt } from 'react-icons/fa'
import NavLinks from './nav-links'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { ModeToggle } from './ui/mode-toggle'
import { useNavigate } from 'react-router-dom'
import { getUsers } from '@/lib/transfers'
import { useQuery } from 'react-query'

export function SideNavDashboard() {
  const navigate = useNavigate()

  const { data: username } = useQuery(['user'], getUsers)

  const usernameEdited = username
    ? `${username.slice(0, 4)} ${username.slice(4)}`
    : ''

  function handleLogout(event: React.FormEvent) {
    event.preventDefault()

    localStorage.removeItem('token')

    navigate('/sign-in')
  }
  return (
    <div>
      <nav className="w-56 border-r h-screen flex flex-col space-y-2 px-2">
        <div className="flex h-16 items-center text-sm justify-center">
          <span className="font-semibold uppercase bg-muted-foreground/10 p-2 rounded-xl">
            {usernameEdited}
          </span>
        </div>

        <Separator />

        <div className="flex flex-col flex-grow md:space-y-2">
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-md bg-muted-foreground/10 md:block" />
        </div>

        <form
          onSubmit={handleLogout}
          className="pb-2 flex items-center justify-between gap-2"
        >
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
