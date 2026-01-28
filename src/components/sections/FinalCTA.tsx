import { motion } from 'framer-motion'
import { Rocket, ArrowRight, CheckCircle } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Main CTA */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
              Let AI do the Work so you can Scale Faster
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto mb-12">
              Join hundreds of businesses that have transformed their operations with intelligent automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg">
                Book a free call
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button className="inline-flex items-center justify-center px-8 py-4 bg-surface border border-surface text-text rounded-lg hover:border-primary/30 transition-colors font-semibold text-lg">
                View case studies
              </button>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fast Implementation</h3>
              <p className="text-text-muted">
                Get started in weeks, not months. Our streamlined process ensures quick value delivery.
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Proven Results</h3>
              <p className="text-text-muted">
                95% of our clients achieve ROI within 3 months of implementation.
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Continuous Support</h3>
              <p className="text-text-muted">
                Dedicated support team and regular updates to keep your automation optimal.
              </p>
            </motion.div>
          </div>

          {/* Final Banner */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Schedule a free consultation and get a customized automation plan for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors font-semibold">
                  Get Started Free
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">
                  Watch Demo
                </button>
              </div>
              
              <p className="mt-8 text-sm opacity-75">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}