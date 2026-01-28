import { createContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
  isSystemPreference: boolean
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'aura-theme',
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey) as Theme | null
      if (stored === 'light' || stored === 'dark') {
        return stored
      }
    }
    
    if (typeof window !== 'undefined' && window.matchMedia) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      return prefersDark ? 'dark' : 'light'
    }
    
    return defaultTheme
  })

  const [isSystemPreference, setIsSystemPreference] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey)
      return !stored
    }
    return true
  })

  useEffect(() => {
    const root = window.document.documentElement
    
    root.classList.remove('light', 'dark')
    root.setAttribute('data-theme', theme)
    
    const meta = document.querySelector('meta[name="color-scheme"]')
    if (meta) {
      meta.setAttribute('content', theme)
    } else {
      const newMeta = document.createElement('meta')
      newMeta.name = 'color-scheme'
      newMeta.content = theme
      document.head.appendChild(newMeta)
    }
    
    if (!isSystemPreference) {
      localStorage.setItem(storageKey, theme)
    }
  }, [theme, storageKey, isSystemPreference])

  useEffect(() => {
    if (!isSystemPreference) return
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e: MediaQueryListEvent) => {
      setThemeState(e.matches ? 'dark' : 'light')
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [isSystemPreference])

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'))
    setIsSystemPreference(false)
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    setIsSystemPreference(false)
  }

  const value = {
    theme,
    toggleTheme,
    setTheme,
    isSystemPreference,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

