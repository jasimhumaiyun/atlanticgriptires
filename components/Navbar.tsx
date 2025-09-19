'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const target = `#${sectionId}`
    if (window.lenis) {
      window.lenis.scrollTo(target)
    } else {
      const section = document.getElementById(sectionId)
      section?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/98 backdrop-blur-xl shadow-2xl' : 'bg-black/95 backdrop-blur-lg'
    } border-b border-primary/20`}>
      <div className="container-custom">
        <div className="flex items-center justify-center h-20">
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Why AG', 'Contact'].map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-white font-medium hover:text-primary transition-colors relative group cursor-pointer"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-red text-white px-6 py-3 rounded-full font-semibold hover:-translate-y-0.5 transition-transform shadow-[0_4px_15px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.4)] cursor-pointer"
            >
              Book Appointment
            </motion.button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 z-50"
          >
            <span className={`block w-7 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-7 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-7 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-black/98 backdrop-blur-xl border-t border-primary/20"
        >
          <div className="flex flex-col p-6 space-y-4">
            {['Home', 'About', 'Services', 'Why AG', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-white text-left py-2 hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-red text-white py-3 rounded-full font-semibold mt-4"
            >
              Book Appointment
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}