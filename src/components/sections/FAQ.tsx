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
    <section id="faq" className="py-32 bg-background relative transition-colors">
      <div className="container mx-auto px-6 max-w-4xl">
         <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 transition-colors">{t('faq.title')}</h2>
          <p className="text-xl text-text-muted transition-colors">{t('faq.subtitle')}</p>
        </div>

        <div className="space-y-4">
           {faqs.map((faq: FAQItem, index: number) => (
            <div
              key={index}
              className="group border border-border rounded-2xl bg-surface overflow-hidden transition-all hover:border-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-text transition-colors">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-text-muted transition-all duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
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
                    <div className="px-6 pb-6 pt-0 text-text-muted leading-relaxed transition-colors">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-surface border border-border text-center relative overflow-hidden transition-colors">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary opacity-20 blur-[80px] rounded-full pointer-events-none" />
           <div className="relative z-10">
              <h3 className="text-2xl font-bold text-text mb-4 transition-colors">{t('faq.stillHaveQuestions')}</h3>
              <p className="text-text-muted mb-8 max-w-xl mx-auto transition-colors">
                {t('faq.cantFindAnswer')}
              </p>
              <button className="px-8 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                {t('faq.contactUs')}
             </button>
           </div>
        </div>
      </div>
    </section>
  )
}