import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './components/ui/theme-provider'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Helmet titleTemplate="%s | Drogarias Campeã" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
