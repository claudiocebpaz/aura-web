import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 5, // 5 minutes (v5.84 usa gcTime en lugar de cacheTime)
      staleTime: 1000 * 60 * 2, // 2 minutes
      retry: 1,
    },
  },
})