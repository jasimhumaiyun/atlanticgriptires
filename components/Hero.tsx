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
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-black py-12 md:py-28 lg:py-32 hero-glow"
    >

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-8 lg:gap-12 xl:gap-20 relative">
          <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2" aria-hidden="true">
            <div className="relative h-full w-1">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#DC2626] to-transparent opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF0000] via-50% to-transparent blur-sm"></div>
              <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#FF0000] via-50% to-transparent"></div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex lg:hidden items-center justify-center order-1"
          >
            <Image
              src="/logo.png"
              alt="Atlantic Grip Tires"
              width={200}
              height={200}
              className="w-32 h-auto"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="relative z-10 max-w-2xl w-full lg:w-auto order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="hidden sm:inline-flex badge-chip bg-white/10 text-[0.7rem] text-white/80 mb-6"
            >
              Direct Import • Premium Quality • Unbeatable Prices
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="hidden sm:block font-bebas text-3xl leading-none text-white sm:text-4xl md:text-5xl lg:text-5xl font-black uppercase"
              style={{ fontWeight: 900, letterSpacing: '0.02em' }}
            >
              <span className="text-[#DC2626] animate-glow-pulse" style={{ textShadow: '0 0 50px rgba(220,38,38,1), 0 0 80px rgba(220,38,38,0.8)' }}>ATLANTIC GRIP</span> <span className="text-white animate-glow-pulse" style={{ textShadow: '0 0 50px rgba(255,255,255,1), 0 0 80px rgba(255,255,255,0.8)' }}>TIRES</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-6 sm:mt-8 flex flex-row items-center gap-2 sm:gap-4"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-red text-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_120px_rgba(220,38,38,0.35)] rounded-full px-4 py-2 sm:px-7 sm:py-2.5 text-xs sm:text-base font-semibold cursor-pointer text-center flex-1 sm:flex-none"
              >
                Book Appointment
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="rounded-full border border-white/20 px-4 py-2 sm:px-7 sm:py-2.5 text-xs sm:text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/10 cursor-pointer text-center flex-1 sm:flex-none"
              >
                View Services
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-4"
            >
              <div className="rounded-2xl border border-white/15 bg-black/50 backdrop-blur-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">What We Offer:</h3>
                <div className="hidden sm:block space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <div>
                      <span className="text-white font-semibold text-sm">Full Tire Services</span>
                      <span className="text-white/60 text-xs block mt-0.5">Sales • Installation • Rotation • Repair</span>
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
                      <span className="text-white/60 text-xs block mt-0.5">Professional mounting in 60 minutes</span>
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
                      <span className="text-white/60 text-xs block mt-0.5">Best prices through direct sourcing</span>
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
                    <span className="text-sm text-white/80">Full Tire Services - Sales, Installation, Repair</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <span className="text-sm text-white/80">60-Minute Professional Installation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <span className="text-sm text-white/80">Direct Import Pricing - Best Value</span>
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

              <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-5 sm:p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Contact</h4>
                    <p className="text-white font-semibold">Shynu Philip</p>
                    <p className="text-white/60 text-sm">Managing Director</p>
                    <p className="text-white/80 text-sm mt-1">+1 (709) 351-1126</p>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Location</h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      934 Topsail Road, Mount Pearl<br />
                      St. John&apos;s, NL, Canada<br />
                      A1N 5L3
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative hidden lg:flex items-center justify-center mt-6 sm:mt-8 lg:mt-0 order-3 lg:order-2"
            style={{ transform: 'scale(1.5)' }}
          >
            <Image
              src="/logo.png"
              alt="Atlantic Grip Tires"
              width={1200}
              height={1200}
              className="w-48 sm:w-64 lg:w-full max-w-[400px] lg:max-w-none h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
