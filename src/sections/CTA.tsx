import { useLanguage } from '../i18n';
import { useWaitlist } from '../context';

export function CTA() {
  const { t } = useLanguage();
  const { openModal } = useWaitlist();

  return (
    <section className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 rounded-2xl mb-8">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
            <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Headline */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight">
          {t.cta.title}{' '}
          <span className="text-slate-400">{t.cta.titleHighlight}</span>
        </h2>

        <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
          {t.cta.subtitle}
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 text-lg font-semibold rounded-lg hover:bg-slate-100 transition-colors shadow-lg hover:shadow-xl"
          >
            {t.cta.button}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          {t.cta.note}
        </p>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-2 text-slate-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm">SOC 2 Type II</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-sm">256-bit SSL</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">GDPR Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
