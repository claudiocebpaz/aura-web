import { motion } from 'framer-motion'
import { Workflow, Bot, TrendingUp, Check } from 'lucide-react'

const features = [
  {
    title: 'Automated Operations',
    description: 'Streamline your internal processes with intelligent workflows. We identify bottlenecks and deploy AI agents to handle repetitive tasks.',
    checklist: ['Data Entry Automation', 'Document Processing', 'Error Reduction'],
    icon: Workflow,
    align: 'left' // Text on left, Image on right
  },
  {
    title: '24/7 AI Assistants',
    description: 'Deploy always-on support agents that handle customer inquiries, schedule meetings, and filter leads without human intervention.',
    checklist: ['Instant Response Time', 'Multi-channel Support', 'Natural Language Understanding'],
    icon: Bot,
    align: 'right' // Image on left, Text on right
  },
  {
    title: 'Growth Engines',
    description: 'Scale your marketing and sales efforts with autonomous agents that find, qualify, and nurture leads automatically.',
    checklist: ['Automated Outreach', 'Lead Scoring', 'Content Personalization'],
    icon: TrendingUp,
    align: 'left'
  }
]

export default function Services() {
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
            Capabilities that scale <br className="hidden md:block" />
            <span className="text-gray-500">with your vision.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            We don't just build software. We build autonomous systems that drive real business results.
          </motion.p>
        </div>

        {/* Features List */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col ${feature.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: feature.align === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                  <feature.icon className="w-6 h-6 text-white" />
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
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Abstract UI Elements based on feature type */}
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
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}