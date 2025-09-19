'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const highlights = [
  'Direct Import Advantage',
  'Local Weather Expertise',
  '60-Minute Install',
  'Expert-Led Operations'
]

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
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-black py-20 md:py-28 lg:py-32 hero-glow"
    >

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="relative z-10 max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="badge-chip bg-white/10 text-[0.7rem] text-white/80 mb-6"
            >
              Direct Import • Premium Quality • Unbeatable Prices
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-bebas text-4xl leading-none text-white sm:text-5xl lg:text-5xl font-black uppercase"
              style={{ fontWeight: 900, letterSpacing: '0.02em' }}
            >
              ATLANTIC GRIP<br className="lg:hidden" /> <span className="text-gradient">TIRES</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-6 text-base text-white/80 md:text-lg italic"
            >
              Expert tire solutions for Newfoundland & Labrador drivers since 2024.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-red text-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_120px_rgba(220,38,38,0.35)] rounded-full px-8 py-4 text-lg font-semibold cursor-pointer"
              >
                Book Appointment
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="rounded-full border border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/10 cursor-pointer"
              >
                View Services
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-10 space-y-4"
            >
              <h3 className="text-xl font-bold text-white">What We Offer:</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/12 bg-[#11131b] p-5">
                  <p className="text-lg font-semibold text-white">Full Tire Services</p>
                  <p className="mt-2 text-sm text-white/70">Sales • Installation • Rotation • Repair</p>
                </div>
                <div className="rounded-xl border border-white/12 bg-[#11131b] p-5">
                  <p className="text-lg font-semibold text-white">Fast Installation</p>
                  <p className="mt-2 text-sm text-white/70">Professional mounting in 60 minutes</p>
                </div>
                <div className="rounded-xl border border-white/12 bg-[#11131b] p-5">
                  <p className="text-lg font-semibold text-white">Direct Import Pricing</p>
                  <p className="mt-2 text-sm text-white/70">Best prices through direct sourcing</p>
                </div>
                <div className="rounded-xl border border-white/12 bg-[#11131b] p-5">
                  <p className="text-lg font-semibold text-white">Free Inspection</p>
                  <p className="mt-2 text-sm text-white/70">Complimentary tire check & air pressure</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative hidden lg:flex lg:items-center lg:justify-center"
            style={{ transform: 'scale(1.5)' }}
          >
            <Image
              src="/logo.png"
              alt="Atlantic Grip Tires"
              width={1200}
              height={1200}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
