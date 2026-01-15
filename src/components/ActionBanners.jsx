import React from 'react'

const actions = [
  { t: 'Sell Mobile', btn: 'Sell Now', c: 'from-red-500 to-orange-400' },
  { t: 'Buy Mobiles', btn: 'Buy Now', c: 'from-green-400 to-teal-500' },
  { t: 'Exchange Mobiles', btn: 'Exchange Now', c: 'from-blue-500 to-indigo-500' }
]

export default function ActionBanners() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {actions.map(a => (
        <div key={a.t} className={`rounded-xl p-8 text-white bg-gradient-to-br ${a.c} flex flex-col items-start justify-between shadow-lg hover:shadow-xl hover:shadow-glow transition-all duration-300 relative overflow-hidden group`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-white/20 transition-colors"></div>
          <div className="relative z-10 mb-6">
            <div className="font-heading font-bold text-2xl text-white">{a.t}</div>
            <div className="mt-2 text-white/90 font-medium">Best deals and quick processes</div>
          </div>
          <div className="relative z-10">
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-50 hover:scale-105 transition-all shadow-md">{a.btn}</button>
          </div>
        </div>
      ))}
    </div>
  )
}
