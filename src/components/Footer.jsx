import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-primary-dark border-t border-gray-800 text-gray-300 mt-auto relative overflow-hidden">
      {/* DECORATIVE GRADIENT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h4 className="font-heading font-bold text-2xl text-white mb-6">
            Santhosh <span className="text-accent">Mobiles</span>
          </h4>
          <p className="text-sm leading-relaxed text-gray-400 mb-6">
            Your premium destination for the latest smartphones, accessories, and expert repairs. Experience luxury service.
          </p>
          <div className="space-y-2 text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <span className="text-accent font-bold">A.</span>
              <span>Collector Office, Tiruppur - 641 604.</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent font-bold">P.</span>
              <span>+91 97902 25832</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent font-bold">E.</span>
              <span>contact@shanthoshmobiles.com</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg text-white mb-6">Shop Collection</h4>
          <ul className="space-y-3 text-sm">
            {['Mobiles', 'Tablets', 'Laptops', 'Smart Watches', 'Accessories'].map(item => (
              <li key={item}>
                <a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-accent transition-colors"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg text-white mb-6">Our Services</h4>
          <ul className="space-y-3 text-sm">
            {['Sell a Phone', 'Book a Repair', 'Device Diagnostics', 'Data Recovery'].map(item => (
              <li key={item}>
                <a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-accent transition-colors"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg text-white mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {['About Us', 'Why SanthoshMobiles', 'Terms & Conditions', 'Privacy Policy'].map(item => (
              <li key={item}>
                <a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-accent transition-colors"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-black/20 border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © 2026 Santhosh Mobiles – Innovation in Every Device.
      </div>
    </footer>
  )
}
