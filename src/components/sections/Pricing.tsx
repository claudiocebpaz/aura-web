import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'



export default function Pricing() {
  const { t } = useTranslation()
  const pricingPlans = t('pricing.plans', { returnObjects: true }) as any[]
  const mostPopularLabel = t('pricing.mostPopular')

  return (
    <section id="pricing" className="py-32 bg-background relative overflow-hidden transition-colors">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary opacity-10 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
         <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 transition-colors">{t('pricing.title')}</h2>
          <p className="text-xl text-text-muted mb-8 transition-colors">{t('pricing.subtitle')}</p>

          <div className="inline-flex items-center p-3 bg-surface border border-border rounded-xl mt-4 transition-colors">
            <span className="text-sm text-text transition-colors">💡 {t('pricing.note')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan: any, index: number) => {
            const isHighlighted = index === 1
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-3xl border flex flex-col transition-colors ${isHighlighted
                  ? 'bg-surface-hover border-primary/50 shadow-[0_0_40px_-10px_rgba(129,74,200,0.3)]'
                  : 'bg-surface border-border hover:border-border transition-colors'
                  }`}
              >
                {isHighlighted && (
                  <div className="absolute -top-4 w-full left-0 flex justify-center">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-primary">{mostPopularLabel}</span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-medium text-text mb-2 transition-colors">{plan.name}</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-4xl font-bold text-text transition-colors">{plan.price}</span>
                    {plan.price !== 'Personalizado' && <span className="text-text-muted mb-1 transition-colors">/mo</span>}
                  </div>
                  <p className="text-sm text-text-muted transition-colors">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-text transition-colors">
                      <Check className="w-4 h-4 text-primary mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-xl font-bold transition-all active:scale-95 ${isHighlighted
                  ? 'bg-primary text-white hover:bg-primary/90 shadow-lg'
                  : 'bg-text text-background hover:bg-text/90'
                  }`}>
                  {plan.buttonText || 'Get Started'}
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}