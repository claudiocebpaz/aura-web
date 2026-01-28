import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How can AI automation help my business?',
    answer: 'AI automation can streamline repetitive tasks, improve accuracy, reduce operational costs, and provide data-driven insights for better decision-making. It helps businesses scale efficiently without increasing workload.',
  },
  {
    question: 'Is AI automation difficult to integrate?',
    answer: 'Not at all! Our team handles the entire integration process with minimal disruption to your existing workflows. We ensure seamless compatibility with your current systems and provide comprehensive training.',
  },
  {
    question: 'What industries can benefit from AI automation?',
    answer: 'Virtually all industries can benefit! We\'ve successfully implemented AI solutions for healthcare, finance, e-commerce, manufacturing, logistics, and professional services. Each solution is tailored to industry-specific needs.',
  },
  {
    question: 'Do I need technical knowledge to use AI automation?',
    answer: 'No technical expertise required. Our solutions are designed with user-friendly interfaces, and we provide full training and ongoing support. You can focus on your business while our AI handles the automation.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer 24/7 customer support, dedicated account managers for enterprise clients, comprehensive documentation, regular training sessions, and proactive system monitoring to ensure optimal performance.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-32 bg-black relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently asked questions</h2>
          <p className="text-xl text-gray-400">Everything you need to know about our platform and billing.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group border border-white/10 rounded-2xl bg-white/5 overflow-hidden transition-all hover:border-white/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-white/5 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#814AC8] opacity-20 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
            <button className="px-8 py-3 bg-[#814AC8] text-white rounded-xl font-medium hover:bg-[#6c3da3] transition-colors shadow-lg shadow-purple-500/20">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}