import { Link } from 'react-router-dom'
import { DropdownLogin } from './ui/dropdown-login'
import { ModeToggle } from './ui/mode-toggle'

export function HeaderHome() {
  return (
    <nav className="flex justify-between h-16 items-center max-w-[1200px] m-auto fixed top-0 left-0 right-0 z-50">
      <Link to="/" className="hover:font-semibold transition-all">
        <span>Drogarias campeã</span>
      </Link>
      <div>
        <nav className="flex list-none gap-4 items-center">
          <li className="hover:font-semibold transition-all">
            <DropdownLogin text="Acessar" />
          </li>
          <ModeToggle />
        </nav>
      </div>
    </nav>
  )
}
