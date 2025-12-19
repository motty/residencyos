import { useLanguage } from '../i18n';

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-amber-50/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-slate-600 uppercase bg-slate-100 rounded-full mb-6">
            {t.testimonials.label}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-slate-900 leading-tight tracking-tight">
            {t.testimonials.title}{' '}
            <span className="text-slate-500">{t.testimonials.titleHighlight}</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl ${
                index === 1
                  ? 'bg-slate-900 text-white'
                  : 'bg-cream-50 border border-slate-100'
              }`}
            >
              {/* Quote Icon */}
              <svg
                className={`w-10 h-10 mb-6 ${index === 1 ? 'text-slate-700' : 'text-slate-200'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <p className={`text-lg leading-relaxed mb-8 ${index === 1 ? 'text-slate-300' : 'text-slate-600'}`}>
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${
                  index === 1 ? 'bg-slate-800' : 'bg-slate-200'
                } flex items-center justify-center`}>
                  <span className={`text-lg font-semibold ${index === 1 ? 'text-white' : 'text-slate-600'}`}>
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className={`font-semibold ${index === 1 ? 'text-white' : 'text-slate-900'}`}>
                    {testimonial.author}
                  </p>
                  <p className={`text-sm ${index === 1 ? 'text-slate-400' : 'text-slate-500'}`}>
                    {testimonial.role}
                  </p>
                  <p className={`text-xs ${index === 1 ? 'text-slate-500' : 'text-slate-400'}`}>
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="absolute top-8 right-8 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${index === 1 ? 'text-amber-400' : 'text-amber-500'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {[
            { value: '10,000+', label: 'Active Users' },
            { value: '98%', label: 'Approval Rate' },
            { value: '150+', label: 'Countries Covered' },
            { value: '4.9/5', label: 'User Rating' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-4xl lg:text-5xl font-semibold text-slate-900 mb-2">
                {stat.value}
              </p>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
