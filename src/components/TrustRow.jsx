import React from 'react'

const items = ['54+ Quality Checks', 'Brand Warranty', 'Returns & Replacement', 'Guaranteed Buyback', 'Actual Product Images']

export default function TrustRow() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex gap-4 overflow-auto scrollbar-hide">
      {items.map(i => (
        <div key={i} className="flex-shrink-0 bg-white border border-gray-200 text-slate-700 dark:bg-white/5 dark:border-white/10 dark:text-gray-200 px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/10 hover:border-accent/40 transition-colors cursor-default whitespace-nowrap backdrop-blur-sm shadow-sm dark:shadow-none">
          {i}
        </div>
      ))}
    </div>
  )
}
