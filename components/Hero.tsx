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
        <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-8 lg:gap-12 xl:gap-20">
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
              className="badge-chip bg-white/10 text-[0.6rem] sm:text-[0.7rem] text-white/80 mb-4 sm:mb-6"
            >
              Direct Import • Premium Quality • Unbeatable Prices
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-bebas text-3xl leading-none text-white sm:text-4xl md:text-5xl lg:text-5xl font-black uppercase"
              style={{ fontWeight: 900, letterSpacing: '0.02em' }}
            >
              ATLANTIC GRIP<br className="sm:hidden" /> <span className="text-gradient">TIRES</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base text-white/80 md:text-lg italic"
            >
              Expert tire solutions for Newfoundland & Labrador drivers since 2024.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-6 sm:mt-8 flex flex-row items-center gap-2 sm:gap-4"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-red text-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_120px_rgba(220,38,38,0.35)] rounded-full px-4 py-2.5 sm:px-8 sm:py-4 text-xs sm:text-lg font-semibold cursor-pointer text-center flex-1 sm:flex-none"
              >
                Book Appointment
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="rounded-full border border-white/20 px-4 py-2.5 sm:px-8 sm:py-4 text-xs sm:text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/10 cursor-pointer text-center flex-1 sm:flex-none"
              >
                View Services
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-8 sm:mt-10 space-y-3 sm:space-y-4"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white">What We Offer:</h3>
              <div className="hidden sm:grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/12 bg-[#11131b] p-4 sm:p-5">
                  <p className="text-base sm:text-lg font-semibold text-white">Full Tire Services</p>
                  <p className="mt-2 text-sm text-white/70">Sales • Installation • Rotation • Repair</p>
                </div>
                <div className="rounded-xl border border-white/12 bg-[#11131b] p-4 sm:p-5">
                  <p className="text-base sm:text-lg font-semibold text-white">Fast Installation</p>
                  <p className="mt-2 text-sm text-white/70">Professional mounting in 60 minutes</p>
                </div>
                <div className="rounded-xl border border-white/12 bg-[#11131b] p-4 sm:p-5">
                  <p className="text-base sm:text-lg font-semibold text-white">Direct Import Pricing</p>
                  <p className="mt-2 text-sm text-white/70">Best prices through direct sourcing</p>
                </div>
                <div className="rounded-xl border border-white/12 bg-[#11131b] p-4 sm:p-5">
                  <p className="text-base sm:text-lg font-semibold text-white">Free Inspection</p>
                  <p className="mt-2 text-sm text-white/70">Complimentary tire check & air pressure</p>
                </div>
              </div>
              <div className="sm:hidden space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-sm text-white/80">Full Tire Services - Sales, Installation, Repair</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-sm text-white/80">60-Minute Professional Installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-sm text-white/80">Direct Import Pricing - Best Value</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-sm text-white/80">Free Inspection & Air Check</span>
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
