'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const target = `#${sectionId}`
    if (window.lenis) {
      window.lenis.scrollTo(target)
    } else {
      const section = document.getElementById(sectionId)
      section?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative isolate min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(to bottom, #000000 0%, rgba(0, 0, 0, 0.9) 20%, rgba(220, 38, 38, 0.2) 60%, rgba(220, 38, 38, 0.4) 100%)'
      }}
    >
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center justify-center text-center w-full">

          {/* Logo and Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            {/* Mobile Layout */}
            <div className="flex items-center gap-4 sm:hidden">
              <div className="logo-wrapper cursor-pointer flex-shrink-0">
                <Image
                  src="/new1.png"
                  alt="Atlantic Grip Tires"
                  width={200}
                  height={200}
                  className="w-24 h-auto object-contain logo-morph-inner"
                  priority
                />
              </div>
              <div className="flex flex-col gap-3 flex-1 items-start">
                {/* Tagline - Mobile */}
                <p className="text-white/90 text-xs font-medium leading-snug text-left">
                  Your <span className="text-[#DC2626] font-bold">one-stop</span> tire & service shop
                </p>
                {/* Buttons - Mobile */}
                <div className="flex flex-row items-center gap-2">
                  <a
                    href="tel:+17093511126"
                    className="bg-gradient-red text-white rounded-full px-5 py-2.5 text-sm font-semibold cursor-pointer hover:-translate-y-1 transition inline-flex items-center gap-1.5"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                    Call Now
                  </a>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white cursor-pointer hover:-translate-y-1 transition"
                  >
                    Services
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden sm:flex items-center justify-center gap-8">
              <div className="logo-wrapper cursor-pointer">
                <Image
                  src="/new1.png"
                  alt="Atlantic Grip Tires"
                  width={200}
                  height={200}
                  className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain logo-morph-inner"
                  priority
                />
              </div>
              <div className="flex flex-col items-start gap-3">
                <h1 className="font-bebas text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase animate-title-glow">
                  <span className="text-[#DC2626]">ATLANTIC GRIP</span>{' '}
                  <span className="text-white">TIRES</span>
                </h1>
                {/* Badge */}
                <span className="inline-flex badge-chip text-[0.7rem] text-white/80">
                  One-Stop Shop • Walk-Ins Welcome • No Appointment Required
                </span>
                {/* Buttons */}
                <div className="flex flex-row items-center gap-4">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-gradient-red text-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_120px_rgba(220,38,38,0.35)] rounded-full px-7 py-2.5 text-base font-semibold cursor-pointer"
                  >
                    Book Appointment
                  </button>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="rounded-full border border-white/20 px-7 py-2.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/10 cursor-pointer"
                  >
                    View Services
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="relative z-10 max-w-4xl w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl mx-auto"
            >
              <div className="rounded-2xl border border-white/15 bg-black/50 backdrop-blur-xl p-5 sm:p-6 text-left info-box-glow cursor-pointer">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 text-left">What We Offer:</h3>
                <p className="text-white/70 text-xs sm:text-sm mb-4 text-left">For sedans, SUVs, light trucks & performance vehicles</p>
                <div className="hidden sm:block space-y-2">
                  <div className="flex items-start gap-3">
                    <svg className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <div>
                      <span className="text-white font-semibold text-sm">Wide Selection of Premium Brands</span>
                      <span className="text-white/60 text-xs block mt-0.5">Top quality tires at competitive prices</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <div>
                      <span className="text-white font-semibold text-sm">Fast Installation</span>
                      <span className="text-white/60 text-xs block mt-0.5">Drive in, drive out in 60 minutes</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <div>
                      <span className="text-white font-semibold text-sm">Direct Import Pricing</span>
                      <span className="text-white/60 text-xs block mt-0.5">Serving individual & commercial clients</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <div>
                      <span className="text-white font-semibold text-sm">Free Inspection</span>
                      <span className="text-white/60 text-xs block mt-0.5">Complimentary tire check & air pressure</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <div>
                      <span className="text-white font-semibold text-sm">Free Tire Rotation</span>
                      <span className="text-white/60 text-xs block mt-0.5">Complimentary rotation after 6 months of purchase</span>
                    </div>
                  </div>
                </div>
                <div className="sm:hidden space-y-3">
                  <div className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <span className="text-sm text-white/80">Wide Selection - Premium brands for all vehicles</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <span className="text-sm text-white/80">60-Minute Installation - No appointment needed</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <span className="text-sm text-white/80">Direct Import - Best value for all clients</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <span className="text-sm text-white/80">Free Inspection & Air Check</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <span className="text-sm text-white/80">Free Rotation after 6 months of purchase</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-5 sm:p-6 text-left info-box-glow cursor-pointer">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Contact</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <svg className="w-4 h-4 text-blue-400" style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                      </svg>
                      <a href="tel:+17093511126" className="text-white/80 text-sm hover:text-white transition-colors">+1 (709) 351-1126</a>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Location</h4>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=934+Topsail+Road+Mount+Pearl+NL+A1N+5L3+Canada"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 group"
                    >
                      <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors">
                        934 Topsail Road, Mount Pearl<br />
                        St. John&apos;s, NL, Canada<br />
                        A1N 5L3
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
