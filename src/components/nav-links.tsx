import clsx from 'clsx'
import { FaHome } from 'react-icons/fa'
import { FaHistory } from 'react-icons/fa'
import { MdOutlinePendingActions } from 'react-icons/md'
import { useLocation } from 'react-router-dom'

const links = [
  {
    name: 'Início',
    href: '/dashboard',
    icon: FaHome,
  },
  {
    name: 'Transferências',
    href: '/dashboard/transfers',
    icon: MdOutlinePendingActions,
  },
  {
    name: 'Histórico',
    href: '/dashboard/history',
    icon: FaHistory,
  },
]

export default function NavLinks() {
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path

  return (
    <div className="flex flex-col w-full gap-1">
      {links.map(link => {
        const LinkIcon = link.icon

        return (
          <a
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md text-muted-foreground bg-muted-foreground/10 p-3 text-sm font-medium hover:text-secondary-foreground md:flex-none md:justify-start md:p-2 md:px-3 transition-all',
              {
                'border text-zinc-800 dark:text-white font-semibold': isActive(
                  link.href
                ),
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        )
      })}
    </div>
  )
}
