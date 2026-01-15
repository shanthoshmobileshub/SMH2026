import React from 'react'

const brands = ['Apple', 'Samsung', 'Google', 'Vivo', 'Oppo', 'Realme', 'Nothing']

export default function BrandSlider() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-6">Brands We Love</h3>
      <div className="flex items-center gap-6 overflow-auto pb-4 scrollbar-hide">
        {brands.map(b => (
          <div key={b} className="flex-shrink-0 w-36 h-20 bg-white border-gray-200 dark:bg-primary-light/50 border dark:border-gray-800 rounded-xl flex items-center justify-center text-slate-700 dark:text-gray-300 font-semibold hover:border-accent hover:text-accent dark:hover:text-white dark:hover:bg-primary-light transition-all duration-300 cursor-pointer shadow-sm dark:shadow-none">
            {b}
          </div>
        ))}
      </div>
    </div>
  )
}
