import { useLanguage } from '../i18n';
import { useWaitlist } from '../context';

export function Hero() {
  const { t } = useLanguage();
  const { openModal } = useWaitlist();

  const countries = ['Paraguay', 'USA', 'Brazil', 'Argentina', 'Spain', 'Germany'];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-cream-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-slate-100/40 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-slate-200/30 to-transparent blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(to right, #0f172a 1px, transparent 1px),
              linear-gradient(to bottom, #0f172a 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200/60 shadow-sm mb-8 animate-fade-in-up opacity-0">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-slate-600">{t.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-slate-900 leading-[1.1] tracking-tight animate-fade-in-up opacity-0 delay-100">
              {t.hero.title}
              <br />
              <span className="relative">
                <span className="relative z-10 text-slate-900">{t.hero.titleHighlight}</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-4 text-bronze-400/30"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 8 Q50 0, 100 8 T200 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-8 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl animate-fade-in-up opacity-0 delay-200">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 delay-300">
              <button onClick={openModal} className="btn-primary text-base py-4 px-8">
                <span>{t.hero.cta}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button onClick={openModal} className="btn-secondary text-base py-4 px-8">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>{t.hero.secondaryCta}</span>
              </button>
            </div>

            {/* Trusted Countries */}
            <div className="mt-14 animate-fade-in-up opacity-0 delay-400">
              <p className="text-sm text-slate-500 mb-4">{t.hero.trustedBy}</p>
              <div className="flex flex-wrap gap-3">
                {countries.map((country) => (
                  <span
                    key={country}
                    className="px-3 py-1.5 text-sm font-medium text-slate-600 bg-white/60 border border-slate-200/60 rounded-sm"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Hero Visual */}
          <div className="relative lg:ml-auto animate-scale-in opacity-0 delay-200">
            {/* Main Dashboard Preview */}
            <div className="relative">
              {/* Browser Chrome */}
              <div className="bg-white rounded-lg shadow-elevated overflow-hidden border border-slate-200/60">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-100">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="max-w-sm mx-auto bg-white border border-slate-200 rounded-md px-3 py-1.5 text-xs text-slate-400 flex items-center gap-2">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      app.residencyos.com
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 bg-slate-50/50">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Dashboard</h3>
                      <p className="text-sm text-slate-500">Welcome back, Maria</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                        2 Active
                      </span>
                    </div>
                  </div>

                  {/* Status Cards */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 border border-slate-200/60 shadow-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Temporary Residency</p>
                          <p className="text-sm font-semibold text-slate-900">In Review</p>
                        </div>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '65%' }} />
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-slate-200/60 shadow-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                          <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Next Deadline</p>
                          <p className="text-sm font-semibold text-slate-900">15 Days</p>
                        </div>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5">
                        <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '45%' }} />
                      </div>
                    </div>
                  </div>

                  {/* Timeline Preview */}
                  <div className="bg-white rounded-lg p-4 border border-slate-200/60 shadow-card">
                    <h4 className="text-sm font-medium text-slate-900 mb-4">Application Timeline</h4>
                    <div className="space-y-3">
                      {[
                        { label: 'Application Submitted', status: 'complete', date: 'Nov 15' },
                        { label: 'Documents Verified', status: 'complete', date: 'Nov 22' },
                        { label: 'Interview Scheduled', status: 'current', date: 'Dec 10' },
                        { label: 'Final Decision', status: 'pending', date: 'Pending' },
                      ].map((step, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div
                            className={`w-2.5 h-2.5 rounded-full ${
                              step.status === 'complete'
                                ? 'bg-green-500'
                                : step.status === 'current'
                                ? 'bg-blue-500 ring-4 ring-blue-100'
                                : 'bg-slate-200'
                            }`}
                          />
                          <span className={`text-sm flex-1 ${step.status === 'pending' ? 'text-slate-400' : 'text-slate-700'}`}>
                            {step.label}
                          </span>
                          <span className="text-xs text-slate-400">{step.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-elevated border border-slate-200/60 animate-fade-in-up opacity-0 delay-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Documents Verified</p>
                    <p className="text-xs text-slate-500">Just now</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-6 bg-white rounded-lg p-4 shadow-elevated border border-slate-200/60 animate-fade-in-up opacity-0 delay-600">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">256-bit Encrypted</p>
                    <p className="text-xs text-slate-500">Bank-level security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
