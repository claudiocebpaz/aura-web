import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">

      {/* Background Elements */}
      <div className="absolute inset-0 bg-background z-0 transition-colors" />

      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#814AC8] opacity-20 blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* Optional: Simple Particle Overlay or Noise could go here */}

      <div className="container relative z-10 px-6 mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-8 backdrop-blur-md transition-colors"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm text-text-muted font-medium transition-colors">🚀 {t('hero.badge')}</span>
        </motion.div>

         {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text mb-8 leading-tight text-balance transition-colors"
        >
          {t('hero.titleLine1')} <br className="hidden md:block" />
          <span className="text-text-muted transition-colors">{t('hero.titleLine2')}</span>
        </motion.h1>

         {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed transition-colors"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="group relative px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 shadow-[0_0_40px_-5px_rgba(129,74,200,0.5)]"
          >
            <span className="relative z-10 flex items-center">
              {t('hero.primaryCta')}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          <button
            className="px-8 py-4 bg-surface text-text border border-border rounded-full hover:bg-surface-hover transition-colors text-lg font-medium flex items-center backdrop-blur-sm"
          >
            <Play className="mr-2 w-5 h-5 fill-text" />
            {t('hero.secondaryCta')}
          </button>
        </motion.div>

        {/* Floating UI Elements / Image Placeholder behind/below text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="rounded-2xl border border-border bg-surface backdrop-blur-sm p-4 md:p-6 overflow-hidden shadow-2xl transition-colors">
            {/* Abstract UI Representation */}
            <div className="aspect-video rounded-lg bg-background/40 overflow-hidden relative flex items-center justify-center group transition-colors">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-50" />
              <div className="grid grid-cols-2 gap-4 w-3/4 opacity-80">
                <div className="h-32 bg-surface rounded-lg border border-border animate-pulse transition-colors" />
                <div className="h-32 bg-surface rounded-lg border border-border animate-pulse delay-75 transition-colors" />
                <div className="h-32 bg-surface rounded-lg border border-border col-span-2 animate-pulse delay-150 transition-colors" />
              </div>
              {/* Floating "AI Active" Badge */}
              <div className="absolute top-4 right-4 bg-background/60 backdrop-blur-md border border-border px-3 py-1 rounded-full text-xs font-mono text-primary transition-colors">
                ● PROCESSED
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
