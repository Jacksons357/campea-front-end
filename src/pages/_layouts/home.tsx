import { HeaderHome } from '@/components/header-home'
import { Outlet } from 'react-router-dom'

export function HomeLayout() {
  return (
    <div>
      <header className="border-b absolute top-16 left-0 right-0">
        <HeaderHome />
      </header>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
