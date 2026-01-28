import { motion } from 'framer-motion'
import { TrendingUp, Target, Zap, BarChart } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const caseStudies = [
  {
    title: 'TrailForge',
    description: 'AI-driven forecasting cut inventory waste by 40% for TrailForge',
    fullDescription: 'TrailForge, a suitcase brand, faced stock issues and inefficiencies. Our AI forecasting optimized inventory and production cycles, helping them save costs and deliver faster.',
    icon: TrendingUp,
    color: 'from-purple-500 to-pink-500',
    metrics: [
      { label: '40% Less Inventory Waste', value: '40%' },
      { label: '35% Faster Production', value: '35%' },
      { label: '20% More Accurate Forecasting', value: '20%' },
      { label: '25% Faster Fulfillment', value: '25%' },
    ],
  },
  {
    title: 'MedixChain',
    description: 'AI-powered workflows reduced error rate by 80% in daily operations',
    fullDescription: 'MedixChain, a healthcare logistics company, was dealing with frequent data errors and delays. We introduced AI validation and live tracking to improve accuracy and speed across their supply chain.',
    icon: Target,
    color: 'from-blue-500 to-cyan-500',
    metrics: [
      { label: '80% Error reduction', value: '80%' },
      { label: '90% Accuracy in Data Logs', value: '90%' },
      { label: '30% Faster Delivery', value: '30%' },
      { label: '60+ Hours Saved', value: '60+' },
    ],
  },
  {
    title: 'FinSolve',
    description: 'Automating 50% of operations saved 20% in costs within 2 months',
    fullDescription: 'FinSolve, a financial services firm, was overloaded with repetitive admin tasks. By automating internal workflows and integrating data systems, they streamlined operations and reduced overhead.',
    icon: Zap,
    color: 'from-green-500 to-emerald-500',
    metrics: [
      { label: '50% Operations Automated', value: '50%' },
      { label: '20% Cost Reduction', value: '20%' },
      { label: '70+ Hours Saved/Month', value: '70+' },
      { label: '2x Faster Client Onboarding', value: '2x' },
    ],
  },
  {
    title: 'ScaleByte',
    description: 'AI integration helped ScaleByte close 3x more deals in less time',
    fullDescription: 'ScaleByte\'s sales team struggled with follow-up delays. Our AI sales assistant automated outreach, lead scoring, and CRM updates—resulting in faster responses and more closed deals.',
    icon: BarChart,
    color: 'from-orange-500 to-red-500',
    metrics: [
      { label: '3x More Deals', value: '3x' },
      { label: '40% Faster Responses', value: '40%' },
      { label: '95% Lead Accuracy', value: '95%' },
      { label: 'CRM Fully Synced', value: '100%' },
    ],
  },
]

export default function CaseStudies() {
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
              See How Smart AI Automation Transforms Businesses
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              See how AI automation streamlines operations, boosts and drives growth.
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
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
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center`}>
                        <study.icon className="w-6 h-6 text-white" />
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
                      <span className="font-semibold">Impact:</span>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {study.metrics.map((metric, idx) => (
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
            ))}
          </div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-surface border border-surface rounded-2xl p-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Ready to transform your business?</h3>
                <p className="text-text-muted">
                  Join 50+ businesses that have automated their operations with Xtract.
                </p>
              </div>
              <button className="px-8 py-4 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity font-semibold whitespace-nowrap">
                Book a free consultation
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}