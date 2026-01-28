import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const lang = i18n.resolvedLanguage === 'en' ? 'en' : 'es'

  return (
    <div className="flex items-center gap-2">
      <span className="hidden lg:block text-xs text-gray-500 uppercase tracking-wide">
        {t('header.lang.label')}
      </span>
      <div className="relative flex items-center p-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
        <motion.div
          className="absolute inset-y-1 bg-white rounded-full shadow-lg"
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
          className={`relative z-10 px-3 py-1.5 text-sm font-bold rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#814AC8] focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
            lang === 'es' ? 'text-black' : 'text-gray-400 hover:text-white'
          }`}
        >
          {t('header.lang.es')}
        </button>
        <button
          type="button"
          onClick={() => i18n.changeLanguage('en')}
          aria-pressed={lang === 'en'}
          className={`relative z-10 px-3 py-1.5 text-sm font-bold rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#814AC8] focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
            lang === 'en' ? 'text-black' : 'text-gray-400 hover:text-white'
          }`}
        >
          {t('header.lang.en')}
        </button>
      </div>
    </div>
  )
}
