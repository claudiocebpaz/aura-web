import { Outlet, createRootRoute } from '@tanstack/react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { queryClient } from '@/lib/query-client'
import { ThemeProvider } from '@/lib/theme'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-background text-text transition-colors">
            <Header />
            <main className="flex-1">
              <Outlet />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  )
}