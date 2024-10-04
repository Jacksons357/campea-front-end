import { Outlet } from 'react-router-dom'

export function AuthAdminLayout() {
  return (
    <div>
      <h1>authenticate</h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
