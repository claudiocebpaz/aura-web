import { motion } from 'framer-motion'
import { TrendingUp, Target, Zap, BarChart } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { useTranslation } from 'react-i18next'

const caseStudyIcons = [TrendingUp, Target, Zap, BarChart]
const caseStudyColors = [
  'from-purple-500 to-pink-500',
  'from-blue-500 to-cyan-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-red-500'
]

export default function CaseStudies() {
  const { t } = useTranslation()
  const caseStudies = t('caseStudies.studies', { returnObjects: true }) as any[]

  return (
    <section id="case-studies" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t('caseStudies.title')}
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              {t('caseStudies.subtitle')}
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study: any, index: number) => {
              const IconComponent = caseStudyIcons[index]
              const colorClass = caseStudyColors[index]
              
              return (
                <motion.div
                  key={study.title}
                  variants={fadeInUp}
                  custom={index}
                  className="group"
                >
                  <div className="h-full bg-surface border border-surface rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{study.title}</h3>
                          <p className="text-text-muted">{study.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-muted mb-8">
                      {study.fullDescription}
                    </p>

                    {/* Impact Label */}
                    <div className="mb-6">
                      <div className="inline-flex items-center px-4 py-2 bg-background border border-surface rounded-lg">
                        <span className="font-semibold">{t('caseStudies.impactLabel')}</span>
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {study.metrics.map((metric: any, idx: number) => (
                        <div
                          key={idx}
                          className="bg-background border border-surface rounded-lg p-4 text-center"
                        >
                          <div className="text-2xl font-bold mb-1">{metric.value}</div>
                          <div className="text-sm text-text-muted">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* View Details */}
                    <div className="mt-8 pt-6 border-t border-surface group-hover:border-primary/30 transition-colors">
                      <button className="w-full flex items-center justify-between text-text-muted group-hover:text-text transition-colors">
                        <span>View full case study</span>
                        <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-surface border border-surface rounded-2xl p-8">
               <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">{t('caseStudies.ctaTitle')}</h3>
                <p className="text-text-muted">
                  {t('caseStudies.ctaSubtitle')}
                </p>
              </div>
              <button className="px-8 py-4 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity font-semibold whitespace-nowrap">
                {t('caseStudies.ctaButton')}
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}