import React from 'react'
import { motion } from 'framer-motion'
import { Workflow, Bot, TrendingUp, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import serviceImplImg from '../../assets/images/service-implementation.png'
import serviceTrainImg from '../../assets/images/service-training.png'
import serviceDevImg from '../../assets/images/service-development.png'

const icons = [Workflow, Bot, TrendingUp]
const images = [serviceImplImg, serviceTrainImg, serviceDevImg]



export default function Services() {
  const { t } = useTranslation()

  const features = t('services.features', { returnObjects: true }) as Array<{
    title: string
    description: string
    checklist: string[]
  }>



  return (
    <section id="services" className="py-32 bg-black relative">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-32 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight"
          >
            {t('services.titleLine1')} <br className="hidden md:block" />
            <span className="text-gray-500">{t('services.titleLine2')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        {/* Features List */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: index === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                  {icons[index] && React.createElement(icons[index], { className: "w-6 h-6 text-white" })}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-3">
                  {feature.checklist.map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-[#814AC8]/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#814AC8]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Visual Content (Abstract UI) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex-1 w-full"
              >
                <div className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm group">
                  {/* Glass Sheen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

                  {images[index] ? (
                    <img
                      src={images[index]!}
                      alt={feature.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    /* Abstract UI Elements based on feature type */
                    <div className="absolute inset-0 p-8 flex flex-col justify-center items-center">
                      {/* Fake UI window */}
                      <div className="w-3/4 h-3/4 bg-black/40 rounded-xl border border-white/5 shadow-2xl overflow-hidden relative">
                        {/* Header */}
                        <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500/50" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                          <div className="w-2 h-2 rounded-full bg-green-500/50" />
                        </div>
                        {/* Body content simulation */}
                        <div className="p-6 space-y-4">
                          <div className="flex gap-4">
                            <div className="w-16 h-16 rounded-lg bg-white/5 animate-pulse" />
                            <div className="flex-1 space-y-2">
                              <div className="h-4 w-2/3 bg-white/10 rounded animate-pulse" />
                              <div className="h-4 w-1/2 bg-white/5 rounded animate-pulse delay-75" />
                            </div>
                          </div>
                          <div className="h-24 bg-white/5 rounded-lg border border-white/5" />
                          <div className="flex gap-2">
                            <div className="h-8 w-20 bg-[#814AC8]/20 rounded border border-[#814AC8]/20" />
                            <div className="h-8 w-20 bg-white/5 rounded" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}