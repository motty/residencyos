import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n';
import { useWaitlist } from '../context';

export function Navigation() {
  const { t, language, toggleLanguage } = useLanguage();
  const { openModal } = useWaitlist();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-slate-900 rounded-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span className="font-display text-xl font-semibold text-slate-900 tracking-tight">
              ResidencyOS
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              {t.nav.features}
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              {t.nav.howItWorks}
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              {t.nav.testimonials}
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              {t.nav.pricing}
            </a>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-sm hover:border-slate-300 transition-all duration-200"
              aria-label={t.accessibility.languageToggle}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                <path
                  d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
                  strokeWidth="1.5"
                />
              </svg>
              <span className="uppercase">{language}</span>
            </button>

            {/* CTA Button */}
            <button onClick={openModal} className="btn-primary text-sm py-2.5 px-5">
              {t.nav.getStarted}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            aria-label={isMobileMenuOpen ? t.accessibility.menuClose : t.accessibility.menuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-cream-50/98 backdrop-blur-lg border-t border-slate-100 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          <a
            href="#features"
            className="block text-base font-medium text-slate-700 hover:text-slate-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t.nav.features}
          </a>
          <a
            href="#how-it-works"
            className="block text-base font-medium text-slate-700 hover:text-slate-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t.nav.howItWorks}
          </a>
          <a
            href="#testimonials"
            className="block text-base font-medium text-slate-700 hover:text-slate-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t.nav.testimonials}
          </a>
          <a
            href="#pricing"
            className="block text-base font-medium text-slate-700 hover:text-slate-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t.nav.pricing}
          </a>

          <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded-sm"
            >
              <span className="uppercase">{language === 'en' ? 'ES' : 'EN'}</span>
            </button>
            <button
              className="btn-primary flex-1 justify-center text-sm py-2.5"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openModal();
              }}
            >
              {t.nav.getStarted}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
