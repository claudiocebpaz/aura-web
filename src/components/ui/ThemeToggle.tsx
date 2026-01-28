import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '@/lib/use-theme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full bg-surface border border-border flex items-center p-1 transition-all duration-300 hover:border-border hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <motion.div
        className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg"
        initial={false}
        animate={{
          x: theme === 'dark' ? 0 : 26,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 30,
        }}
      >
        {theme === 'dark' ? (
          <Moon className="w-2.5 h-2.5 text-white" />
        ) : (
          <Sun className="w-2.5 h-2.5 text-white" />
        )}
      </motion.div>
      
      <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
        <Sun className="w-3 h-3 text-text-muted transition-colors" />
        <Moon className="w-3 h-3 text-text-muted transition-colors" />
      </div>
    </button>
  )
}

export function ThemeToggleWithLabel() {
  const { theme } = useTheme()

  return (
    <div className="flex items-center gap-3">
      <Sun className="w-4 h-4 text-text-muted transition-colors" />
      <ThemeToggle />
      <Moon className="w-4 h-4 text-text-muted transition-colors" />
      <span className="text-sm font-medium text-text transition-colors">
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>
    </div>
  )
}