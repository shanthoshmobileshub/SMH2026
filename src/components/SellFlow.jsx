import React from 'react'

const steps = [
  { t: 'Instant Price Quote', d: 'Share device details and get an estimated price instantly.' },
  { t: 'Request Device Pickup', d: 'Pickup from home or workplace at your convenience.' },
  { t: 'Get Paid', d: 'Payment processed within 48 hours after verification.' }
]

export default function SellFlow() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-6">Sell Your Device</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map(s => (
          <div key={s.t} className="bg-white border-gray-200 dark:bg-primary-light/50 border dark:border-gray-800 p-6 rounded-xl hover:border-accent/50 transition-colors group shadow-sm dark:shadow-none">
            <div className="text-3xl mb-4 bg-gray-100 dark:bg-primary-dark w-12 h-12 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">💡</div>
            <h4 className="font-heading font-semibold text-lg text-slate-900 dark:text-white mt-2">{s.t}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
