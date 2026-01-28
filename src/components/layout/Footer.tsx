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
    <footer className="bg-background border-t border-border pt-20 pb-10 transition-colors">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-text flex items-center justify-center transition-colors">
                <span className="text-background font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-text tracking-tight transition-colors">
                {t('header.brand')}
              </span>
            </Link>
            <p className="text-text-muted mb-8 leading-relaxed transition-colors">
              {t('footer.brandDescription')}
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-text-muted hover:bg-text hover:text-background transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-text font-bold mb-6 transition-colors">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-text-muted hover:text-text transition-colors"
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
        <div className="border-t border-border pt-12 pb-12 transition-colors">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-text mb-2 transition-colors">{t('footer.newsletter.title')}</h3>
              <p className="text-text-muted transition-colors">{t('footer.newsletter.subtitle')}</p>
            </div>
            <div className="w-full md:w-auto min-w-[300px]">
              <div className="relative">
                <input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  className="w-full pl-6 pr-12 py-4 bg-surface border border-border rounded-full text-text placeholder-text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors">
          <div className="text-text-muted text-sm transition-colors">
            © {new Date().getFullYear()} {t('header.brand')}. {t('footer.copyright')}
          </div>
          <div className="flex space-x-6 text-sm text-text-muted">
            <Link to="/" className="hover:text-text transition-colors">{t('footer.privacy')}</Link>
            <Link to="/" className="hover:text-text transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
