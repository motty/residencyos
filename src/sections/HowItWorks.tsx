import { useLanguage } from '../i18n';

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-cream-50 overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-slate-600 uppercase bg-white border border-slate-200 rounded-full mb-6">
            {t.howItWorks.label}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-slate-900 leading-tight tracking-tight">
            {t.howItWorks.title}{' '}
            <span className="text-slate-500">{t.howItWorks.titleHighlight}</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200" />

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {t.howItWorks.steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step Number */}
                <div className="relative inline-flex items-center justify-center mb-8">
                  <div className="absolute inset-0 bg-slate-900 rounded-full blur-xl opacity-10" />
                  <div className="relative w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center">
                    <span className="font-display text-xl font-semibold text-white">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>

                {/* Visual */}
                <div className="mt-8 p-6 bg-white rounded-xl border border-slate-200 shadow-card">
                  {index === 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                          <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="h-3 bg-slate-100 rounded w-3/4 mb-2" />
                          <div className="h-2 bg-slate-50 rounded w-1/2" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-10 bg-slate-50 rounded-lg border border-slate-100" />
                        <div className="h-10 bg-slate-50 rounded-lg border border-slate-100" />
                      </div>
                      <div className="h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                        <span className="text-xs text-white font-medium">Create Profile</span>
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="space-y-3">
                      {[
                        { name: 'passport.pdf', size: '2.4 MB', status: 'success' },
                        { name: 'employment_letter.pdf', size: '1.1 MB', status: 'success' },
                        { name: 'bank_statement.pdf', size: '892 KB', status: 'uploading' },
                      ].map((file, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                          <div className="w-8 h-8 rounded bg-red-50 flex items-center justify-center">
                            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM9 17v-6l3 3 3-3v6" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-slate-700 truncate">{file.name}</p>
                            <p className="text-[10px] text-slate-400">{file.size}</p>
                          </div>
                          {file.status === 'success' ? (
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {index === 2 && (
                    <div className="space-y-3">
                      {[
                        { step: 'Application Received', done: true },
                        { step: 'Documents Verified', done: true },
                        { step: 'Interview Scheduled', done: true, current: true },
                        { step: 'Final Approval', done: false },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            item.done
                              ? item.current
                                ? 'bg-blue-500 ring-4 ring-blue-100'
                                : 'bg-green-500'
                              : 'bg-slate-200'
                          }`}>
                            {item.done && !item.current && (
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className={`text-xs ${item.done ? 'text-slate-700' : 'text-slate-400'}`}>
                            {item.step}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
