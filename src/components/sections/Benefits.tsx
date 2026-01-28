import { motion } from 'framer-motion'
import { TrendingUp, Users, Clock, DollarSign, BarChart3, Rocket } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Productivity',
    description: 'Gain actionable insights with AI-driven analytics to improve decision-making and strategy.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Better Customer Experience',
    description: 'Personalized AI interactions improve response times, customer engagement, and overall satisfaction.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Insights',
    description: 'Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Rocket,
    title: 'Scalability & Growth',
    description: 'AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.',
    color: 'from-pink-500 to-rose-500',
  },
]

export default function Benefits() {
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
              The Key Benefits of AI for Your Business Growth
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                custom={index}
                className="group"
              >
                <div className="h-full bg-surface border border-surface rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6`}>
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-text-muted mb-6">
                    {benefit.description}
                  </p>

                  {/* Learn More */}
                  <div className="flex items-center space-x-2 text-primary group-hover:translate-x-2 transition-transform">
                    <span className="font-medium">Learn more</span>
                    <div className="w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Banner */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 bg-gradient-primary rounded-2xl p-8 md:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-text-muted">Businesses Automated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">80%</div>
                <div className="text-text-muted">Average Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">40%</div>
                <div className="text-text-muted">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
                <div className="text-text-muted">Uptime Guarantee</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}