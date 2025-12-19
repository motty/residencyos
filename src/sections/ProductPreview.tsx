import { useLanguage } from '../i18n';

export function ProductPreview() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-800 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-800 rounded-full blur-3xl opacity-50" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-slate-400 uppercase bg-slate-800 rounded-full mb-6">
            {t.product.label}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white leading-tight tracking-tight">
            {t.product.title}{' '}
            <span className="text-slate-400">{t.product.titleHighlight}</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            {t.product.subtitle}
          </p>
        </div>

        {/* Product Screenshot */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-2xl opacity-60" />

          {/* Main Dashboard */}
          <div className="relative bg-slate-800 rounded-xl border border-slate-700 shadow-2xl overflow-hidden">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-700">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="max-w-md mx-auto bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-slate-400 flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>https://app.residencyos.com/dashboard</span>
                </div>
              </div>
            </div>

            {/* Dashboard Layout */}
            <div className="flex min-h-[500px]">
              {/* Sidebar */}
              <div className="hidden lg:block w-64 bg-slate-900 border-r border-slate-700 p-4">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-white">ResidencyOS</span>
                </div>

                <nav className="space-y-1">
                  {['Dashboard', 'Applications', 'Documents', 'Timeline', 'Reminders', 'Settings'].map((item, i) => (
                    <div
                      key={item}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${
                        i === 0 ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                      }`}
                    >
                      <div className="w-5 h-5 rounded bg-slate-700/50" />
                      {item}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 bg-slate-850">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white">My Applications</h3>
                    <p className="text-sm text-slate-400">Track and manage your visa applications</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors">
                    + New Application
                  </button>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'Active', value: '2', color: 'blue' },
                    { label: 'Pending', value: '1', color: 'amber' },
                    { label: 'Approved', value: '3', color: 'green' },
                    { label: 'Documents', value: '24', color: 'purple' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-sm text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Application Cards */}
                <div className="space-y-4">
                  {[
                    { type: 'H-1B Work Visa', status: 'In Review', progress: 65, statusColor: 'blue' },
                    { type: 'Green Card (EB-2)', status: 'Documents Needed', progress: 40, statusColor: 'amber' },
                  ].map((app, i) => (
                    <div key={i} className="bg-slate-800 rounded-lg p-5 border border-slate-700 hover:border-slate-600 transition-colors">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center">
                            <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-white">{app.type}</h4>
                            <p className="text-sm text-slate-400">Updated 2 hours ago</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          app.statusColor === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                          app.statusColor === 'amber' ? 'bg-amber-500/20 text-amber-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {app.status}
                        </span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            app.statusColor === 'blue' ? 'bg-blue-500' :
                            app.statusColor === 'amber' ? 'bg-amber-500' :
                            'bg-green-500'
                          }`}
                          style={{ width: `${app.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="mt-8 text-center text-sm text-slate-400">
            {t.product.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
