import { SideNavDashboard } from '@/components/sidenav-dashboard'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <>
      <div className="flex flex-row">
        <SideNavDashboard />
        <div className="w-full p-10">
          <Outlet />
        </div>
      </div>
    </>
  )
}
