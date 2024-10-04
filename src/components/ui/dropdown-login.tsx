import { Link } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu'
import { FaHouse } from 'react-icons/fa6'
import { RiAdminFill } from 'react-icons/ri'

interface DropdownLoginProps {
  text: string
}

export function DropdownLogin({ text }: DropdownLoginProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{text}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link to="/sign-in" className="hover:font-semibold transition-all">
          <DropdownMenuItem className="cursor-pointer gap-2">
            <FaHouse />
            Lojista
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <Link
          to="/sign-in-admin"
          className="hover:font-semibold transition-all"
        >
          <DropdownMenuItem className="cursor-pointer gap-2">
            <RiAdminFill />
            Admin
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
