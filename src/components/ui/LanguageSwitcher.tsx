import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const lang = i18n.resolvedLanguage === 'en' ? 'en' : 'es'

  return (
    <div className="flex items-center gap-2">
      <span className="hidden lg:block text-xs text-text-muted uppercase tracking-wide transition-colors">
        {t('header.lang.label')}
      </span>
      <div className="relative flex items-center p-1 bg-surface backdrop-blur-md rounded-full border border-border transition-colors">
        <motion.div
          className="absolute inset-y-1 bg-text rounded-full shadow-lg transition-colors"
          initial={false}
          animate={{
            width: '50%',
            left: lang === 'es' ? '0.25rem' : 'calc(50% + 0.25rem)',
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />

        <button
          type="button"
          onClick={() => i18n.changeLanguage('es')}
          aria-pressed={lang === 'es'}
          className={`relative z-10 px-3 py-1.5 text-sm font-bold rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
            lang === 'es' ? 'text-background' : 'text-text-muted hover:text-text'
          }`}
        >
          {t('header.lang.es')}
        </button>
        <button
          type="button"
          onClick={() => i18n.changeLanguage('en')}
          aria-pressed={lang === 'en'}
          className={`relative z-10 px-3 py-1.5 text-sm font-bold rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
            lang === 'en' ? 'text-background' : 'text-text-muted hover:text-text'
          }`}
        >
          {t('header.lang.en')}
        </button>
      </div>
    </div>
  )
}
