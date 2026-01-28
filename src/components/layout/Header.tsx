import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { LanguageDropdown } from '@/components/ui/LanguageDropdown'
import ThemeToggle from '@/components/ui/ThemeToggle'

export default function Header() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for glass background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: t('header.nav.home'), href: '/' },
    { label: t('header.nav.services'), href: '#services' },
    { label: t('header.nav.process'), href: '#process' },
    { label: t('header.nav.caseStudies'), href: '#case-studies' },
    { label: t('header.nav.pricing'), href: '#pricing' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-background/50 backdrop-blur-xl border-b border-border' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 z-50">
            <div className="w-8 h-8 rounded-lg bg-text flex items-center justify-center transition-colors">
              <span className="text-background font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-text tracking-tight transition-colors">
              {t('header.brand')}
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center absolute left-0 right-0">
            <div className="flex items-center space-x-1 p-1 bg-surface backdrop-blur-md rounded-full border border-border transition-colors">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="px-5 py-2 text-sm font-medium text-text-muted hover:text-text hover:bg-surface-hover rounded-full transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3 z-50">
                <LanguageDropdown />
                <ThemeToggle />
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-text text-background text-sm font-bold rounded-full hover:bg-text/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
            >
              {t('header.cta')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 text-text p-2 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col items-center gap-8 transition-colors"
            >
               <div className="w-full flex flex-col items-center gap-3 pb-6 border-b border-border transition-colors">
            <LanguageDropdown />
            <div className="w-full flex justify-center">
              <ThemeToggle />
            </div>
               </div>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-2xl font-medium text-text/80 hover:text-text transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 px-8 py-3 bg-text text-background font-bold rounded-full text-lg w-full text-center transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.cta')}
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
