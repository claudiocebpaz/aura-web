import { motion } from 'framer-motion'
import { Search, Code, GitMerge, TrendingUp, ChevronRight, Activity, Terminal } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { useTranslation } from 'react-i18next'

const processIcons = [Search, Code, GitMerge, TrendingUp]
const processColors = [
  'from-purple-500 to-pink-500',
  'from-blue-500 to-cyan-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-red-500'
]

export default function Process() {
  const { t } = useTranslation()
  const processSteps = t('process.steps', { returnObjects: true }) as any[]
  const labels = t('process.labels', { returnObjects: true }) as any

  return (
    <section id="process" className="py-20 md:py-32 bg-background relative transition-colors">
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
             <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text transition-colors">
              {t('process.title')}
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto transition-colors">
              {t('process.subtitle')}
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="space-y-12">
            {processSteps.map((step: any, index: number) => {
              const IconComponent = processIcons[index]
              const colorClass = processColors[index]
              
              return (
                <motion.div
                  key={step.step}
                  variants={fadeInUp}
                  className="flex flex-col lg:flex-row items-start gap-8"
                >
                  {/* Step Indicator */}
                  <div className="lg:w-1/4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-lg shadow-purple-500/20`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-text-muted transition-colors">{step.step}</div>
                        <h3 className="text-2xl font-bold text-text transition-colors">{step.title}</h3>
                      </div>
                    </div>
                    <p className="mt-4 text-text-muted leading-relaxed transition-colors">{step.description}</p>
                  </div>

                  {/* Step Content */}
                  <div className="lg:w-3/4 w-full">
                    {step.analysis && (
                      <div className="bg-surface border border-border rounded-2xl p-6 backdrop-blur-sm transition-colors">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {step.analysis.map((item: string) => (
                            <div
                              key={item}
                              className="bg-background/50 border border-border rounded-lg p-4 text-center hover:border-border transition-colors"
                            >
                              <div className="text-sm text-text-muted mb-1 flex items-center justify-center gap-1 transition-colors">
                                 <Activity className="w-3 h-3" /> {labels.checking}
                              </div>
                              <div className="font-medium text-text transition-colors">{item}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {step.code && (
                      <div className="bg-[#1e1e1e] border border-border rounded-2xl overflow-hidden shadow-2xl transition-colors">
                        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface transition-colors">
                          <div className="text-sm font-mono text-text-muted flex items-center gap-2 transition-colors">
                             <Terminal className="w-4 h-4" /> plan_implementacion.py
                          </div>
                          <div className="flex space-x-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                          </div>
                        </div>
                        <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed bg-transparent">
                          <code className="text-green-400">{step.code}</code>
                        </pre>
                      </div>
                    )}

                    {step.integration && (
                      <div className="bg-surface border border-border rounded-2xl p-6 backdrop-blur-sm transition-colors">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                          <div className="flex-1 w-full">
                             <h4 className="text-lg font-semibold mb-4 text-text transition-colors">{labels.ourSolution}</h4>
                            <div className="space-y-3">
                              {step.integration.ourStack.map((item: string) => (
                                <div
                                  key={item}
                                  className="flex items-center space-x-3 bg-background/40 border border-border rounded-lg p-3 transition-colors"
                                >
                                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                  <span className="text-text transition-colors">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                              <GitMerge className="w-6 h-6 text-white" />
                            </div>
                          </div>

                          <div className="flex-1 w-full">
                             <h4 className="text-lg font-semibold mb-4 text-text transition-colors">{labels.yourStack}</h4>
                            <div className="space-y-3">
                              {step.integration.yourStack.map((item: string) => (
                                <div
                                  key={item}
                                  className="flex items-center space-x-3 bg-background/40 border border-border rounded-lg p-3 transition-colors"
                                >
                                  <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                  <span className="text-text transition-colors">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {step.optimization && (
                      <div className="bg-surface border border-border rounded-2xl p-6 backdrop-blur-sm transition-colors">
                        <div className="space-y-4">
                          {step.optimization.map((item: any, idx: number) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between bg-background/40 border border-border rounded-lg p-4 group hover:border-border transition-all"
                            >
                              <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                                  <TrendingUp className="w-5 h-5 text-orange-400" />
                                </div>
                                <div>
                                  <div className="font-semibold text-text transition-colors">{item.system}</div>
                                  <div className="text-sm text-text-muted transition-colors">{item.improvement}</div>
                                </div>
                              </div>
                              <button className="p-2 hover:bg-surface-hover rounded-lg transition-colors">
                                <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-text transition-colors" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}