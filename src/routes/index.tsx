import { createFileRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import CaseStudies from '@/components/sections/CaseStudies'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import Benefits from '@/components/sections/Benefits'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Xtract - AI automation agency</title>
        <meta name="description" content="Xtract brings AI automation to your fingertips & streamline tasks. Intelligent automation for modern businesses." />
      </Helmet>
      
      <div className="space-y-20 md:space-y-32 pb-20">
        <Hero />
        <Services />
        <Process />
        <CaseStudies />
        <Benefits />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </div>
    </>
  )
}