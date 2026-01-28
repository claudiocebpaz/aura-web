import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const { t } = useTranslation()
  const faqs = t('faq.questions', { returnObjects: true }) as FAQItem[]
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-32 bg-black relative">
      <div className="container mx-auto px-6 max-w-4xl">
         <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('faq.title')}</h2>
          <p className="text-xl text-gray-400">{t('faq.subtitle')}</p>
        </div>

        <div className="space-y-4">
           {faqs.map((faq: FAQItem, index: number) => (
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
              <h3 className="text-2xl font-bold text-white mb-4">{t('faq.stillHaveQuestions')}</h3>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                {t('faq.cantFindAnswer')}
              </p>
              <button className="px-8 py-3 bg-[#814AC8] text-white rounded-xl font-medium hover:bg-[#6c3da3] transition-colors shadow-lg shadow-purple-500/20">
                {t('faq.contactUs')}
             </button>
           </div>
        </div>
      </div>
    </section>
  )
}