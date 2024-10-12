import { createBrowserRouter } from 'react-router-dom'
import { SignIn } from '../pages/auth/sign-in'
import { HomeLayout } from '@/pages/_layouts/home'
import { HomePage } from '@/pages/app/home'
import { SignInAdmin } from '@/pages/auth/sign-in-admin'
import { AppLayout } from '@/pages/_layouts/app'
import { Transfers } from '@/pages/app/dashboard/transfers/transfers'
import { History } from '@/pages/app/dashboard/history/history'
import { DashboardAdmin } from '@/pages/app/admin/dashboard-admin'
import PrivateRoute from '@/pages/auth/private-navigation'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-in-admin', element: <SignInAdmin /> },
    ],
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/dashboard/transfers',
        element: (
          <PrivateRoute>
            <Transfers />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/history',
        element: (
          <PrivateRoute>
            <History />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/dashboard-admin',
    element: <DashboardAdmin />,
  },
])
