import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useTranslation } from 'react-i18next'



export default function Testimonials() {
  const { t } = useTranslation()
  const testimonials = t('testimonials.testimonials', { returnObjects: true }) as any[]
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-32 bg-black overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#814AC8] opacity-5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
         <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('testimonials.title')}</h2>
          <p className="text-xl text-gray-400">{t('testimonials.subtitle')}</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 -translate-x-full hidden lg:block">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full hidden lg:block">
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative backdrop-blur-sm"
            >
              <Quote className="w-12 h-12 text-[#814AC8] mb-8 opacity-50" />

               <p className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center justify-between border-t border-white/10 pt-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-[#814AC8] font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                </div>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#814AC8] text-[#814AC8]" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center mt-8 gap-4 lg:hidden">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/20'}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

          {/* Logos Grid */}
        <div className="mt-24 pt-12 border-t border-white/5">
          <p className="text-center text-gray-500 mb-8 uppercase tracking-widest text-sm font-semibold">{t('testimonials.trustedBy')}</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {(t('testimonials.sectors', { returnObjects: true }) as string[]).map((sector: string, i: number) => (
              <div key={i} className="text-xl font-bold text-white">{sector}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}