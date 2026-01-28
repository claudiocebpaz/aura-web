import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'

interface Language {
  code: 'es' | 'en'
  flag: string
  label: string
}

export function LanguageDropdown() {
  const { i18n, t } = useTranslation()
  
  const languages: Language[] = [
    { code: 'es', flag: '🇪🇸', label: t('header.lang.options.es') },
    { code: 'en', flag: '🇺🇸', label: t('header.lang.options.en') },
  ]
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  const currentLang = i18n.resolvedLanguage === 'en' ? 'en' : 'es'
  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const handleLanguageChange = (langCode: 'es' | 'en') => {
    i18n.changeLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} className="relative">
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t('header.lang.selectLanguage')}
        className="group flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#814AC8] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.span 
          className="text-lg leading-none"
          animate={{ rotate: isOpen ? 360 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {currentLanguage.flag}
        </motion.span>
        
        <span className="hidden sm:inline text-sm font-medium text-white/90 group-hover:text-white transition-colors">
          {currentLanguage.label}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-white/60 group-hover:text-white/90 transition-colors" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full mt-2 right-0 min-w-[180px] bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/10 overflow-hidden"
            role="listbox"
          >
            {languages.map((language, index) => {
              const isSelected = language.code === currentLang
              const isLast = index === languages.length - 1

              return (
                <motion.button
                  key={language.code}
                  type="button"
                  onClick={() => handleLanguageChange(language.code)}
                  role="option"
                  aria-selected={isSelected}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 ${
                    !isLast ? 'border-b border-white/5' : ''
                  } ${
                    isSelected 
                      ? 'bg-white/10 text-white' 
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                >
                  <motion.span 
                    className="text-xl leading-none"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {language.flag}
                  </motion.span>

                  <span className="text-sm font-medium flex-1">
                    {language.label}
                  </span>

                  {isSelected && (
                    <motion.div
                      layoutId="selected-indicator"
                      className="w-2 h-2 rounded-full bg-[#814AC8] shadow-[0_0_8px_rgba(129,74,200,0.6)]"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
