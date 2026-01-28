import { motion } from 'framer-motion'
import { TrendingUp, Users, Clock, DollarSign, BarChart3, Rocket } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { useTranslation } from 'react-i18next'

const benefitIcons = [TrendingUp, Users, Clock, DollarSign, BarChart3, Rocket]
const benefitColors = [
  'from-purple-500 to-pink-500',
  'from-blue-500 to-cyan-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-red-500',
  'from-indigo-500 to-purple-500',
  'from-pink-500 to-rose-500'
]

export default function Benefits() {
  const { t } = useTranslation()
  const benefits = t('benefits.benefits', { returnObjects: true }) as any[]
  const stats = t('benefits.stats', { returnObjects: true }) as any

  const statsArray = [
    { value: stats.businesses, label: stats.businessesLabel },
    { value: stats.efficiency, label: stats.efficiencyLabel },
    { value: stats.costReduction, label: stats.costReductionLabel },
    { value: stats.uptime, label: stats.uptimeLabel }
  ]

  return (
    <section id="benefits" className="py-20 md:py-32">
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
              {t('benefits.title')}
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              {t('benefits.subtitle')}
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit: any, index: number) => {
              const IconComponent = benefitIcons[index]
              const colorClass = benefitColors[index]
              
              return (
                <motion.div
                  key={benefit.title}
                  variants={fadeInUp}
                  custom={index}
                  className="group"
                >
                  <div className="h-full bg-surface border border-surface rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-6`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-text-muted mb-6">
                      {benefit.description}
                    </p>

                     {/* Learn More */}
                    <div className="flex items-center space-x-2 text-primary group-hover:translate-x-2 transition-transform">
                      <span className="font-medium">{t('benefits.learnMore')}</span>
                      <div className="w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Stats Banner */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 bg-gradient-primary rounded-2xl p-8 md:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statsArray.map((stat: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}