import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Starter',
    price: '$37',
    description: 'Perfect for individuals and small teams.',
    features: [
      'Basic workflow automation',
      '5 AI Agent instances',
      'Standard analytics',
      'Email support',
    ],
    highlight: false,
    buttonText: 'Get Started'
  },
  {
    name: 'Professional',
    price: '$99',
    description: 'For growing businesses scaling operations.',
    features: [
      'Advanced workflow automation',
      'Unlimited AI Agents',
      'Priority 24/7 Support',
      'Custom integrations',
      'Advanced API access'
    ],
    highlight: true,
    buttonText: 'Get Started'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations needing control.',
    features: [
      'Dedicated infrastructure',
      'SLA guarantees',
      'On-premise deployment options',
      'Dedicated Success Manager',
      'Custom AI Training'
    ],
    highlight: false,
    buttonText: 'Contact Sales'
  }
]

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="py-32 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#814AC8] opacity-10 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Simple, transparent pricing</h2>
          <p className="text-xl text-gray-400 mb-8">Choose the plan that fits your growth.</p>

          {/* Toggle */}
          <div className="inline-flex items-center p-1 bg-white/5 border border-white/10 rounded-full">
            <button
              onClick={() => setAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!annual ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${annual ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              Yearly <span className="text-[#814AC8] text-xs ml-1">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border flex flex-col ${plan.highlight
                ? 'bg-white/10 border-[#814AC8]/50 shadow-[0_0_40px_-10px_rgba(129,74,200,0.3)]'
                : 'bg-white/5 border-white/10 hover:border-white/20 transition-colors'
                }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 w-full left-0 flex justify-center">
                  <span className="bg-[#814AC8] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-[#a87ffb]">MOST POPULAR</span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-400 mb-1">/mo</span>}
                </div>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-[#814AC8] mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 rounded-xl font-bold transition-transform active:scale-95 ${plan.highlight
                ? 'bg-[#814AC8] text-white hover:bg-[#6c3da3] shadow-lg'
                : 'bg-white text-black hover:bg-gray-200'
                }`}>
                {plan.buttonText || 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}