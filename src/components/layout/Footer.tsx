import { Link } from '@tanstack/react-router'
import { Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Case Studies', href: '#case-studies' },
      { label: 'Reviews', href: '#reviews' },
    ],
    Company: [
      { label: 'About', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Legal', href: '#legal' },
      { label: 'Contact', href: '#contact' },
    ],
    Resources: [
      { label: 'Blog', href: '#blog' },
      { label: 'Help Center', href: '#help' },
      { label: 'Guides', href: '#guides' },
      { label: 'API Status', href: '#status' },
    ],
  }

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <span className="text-black font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {t('header.brand')}
              </span>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {t('footer.brandDescription')}
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold mb-6">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Newsletter Wide Section */}
        <div className="border-t border-white/10 pt-12 pb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{t('footer.newsletter.title')}</h3>
              <p className="text-gray-400">{t('footer.newsletter.subtitle')}</p>
            </div>
            <div className="w-full md:w-auto min-w-[300px]">
              <div className="relative">
                <input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  className="w-full pl-6 pr-12 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[#814AC8] focus:ring-1 focus:ring-[#814AC8] transition-all"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#814AC8] rounded-full flex items-center justify-center text-white hover:bg-[#6c3da3] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {t('header.brand')}. {t('footer.copyright')}
          </div>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link to="/" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
            <Link to="/" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
