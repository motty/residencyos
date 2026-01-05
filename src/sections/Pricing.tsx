import { useState } from 'react';
import { useLanguage } from '../i18n';
import { useWaitlist } from '../context';

export function Pricing() {
  const { t } = useLanguage();
  const { openModal } = useWaitlist();
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-cream-50 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-slate-600 uppercase bg-white border border-slate-200 rounded-full mb-6">
            {t.pricing.label}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-slate-900 leading-tight tracking-tight">
            {t.pricing.title}{' '}
            <span className="text-slate-500">{t.pricing.titleHighlight}</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            {t.pricing.subtitle}
          </p>

          {/* Billing Toggle */}
          <div className="mt-10 inline-flex items-center gap-4 p-1.5 bg-white rounded-full border border-slate-200">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                !isYearly
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.pricing.monthly}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all flex items-center gap-2 ${
                isYearly
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.pricing.yearly}
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                isYearly ? 'bg-green-500 text-white' : 'bg-green-100 text-green-700'
              }`}>
                {t.pricing.yearlyDiscount}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.pricing.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-slate-900 text-white ring-4 ring-slate-900 ring-offset-4 ring-offset-cream-50'
                  : 'bg-white border border-slate-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1 text-xs font-semibold bg-amber-400 text-slate-900 rounded-full">
                    {t.pricing.popular}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-xl font-semibold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                {plan.name}
              </h3>
              <p className={`mt-2 text-sm ${plan.popular ? 'text-slate-400' : 'text-slate-600'}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-6 mb-8">
                <span className={`text-5xl font-display font-semibold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                  ${isYearly ? plan.yearlyPrice : plan.price}
                </span>
                <span className={`text-sm ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                  {t.pricing.perMonth}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.popular ? 'text-green-400' : 'text-green-600'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={`text-sm ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={openModal}
                className={`w-full py-3.5 text-sm font-semibold rounded-lg transition-all ${
                  plan.popular
                    ? 'bg-white text-slate-900 hover:bg-slate-100'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {t.pricing.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
