'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on Escape key and handle focus trapping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
        hamburgerRef.current?.focus()
      }

      // Focus trapping
      if (e.key === 'Tab' && isMobileMenuOpen && mobileMenuRef.current) {
        const focusableElements = mobileMenuRef.current.querySelectorAll('button')
        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

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
        <div className="flex items-center justify-center h-20 relative">
          <button
            ref={hamburgerRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            className="md:hidden flex flex-col space-y-1.5 z-50 absolute left-0"
          >
            <span className={`block w-7 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-7 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-7 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          <div className="md:hidden font-bebas text-2xl font-black uppercase tracking-wide">
            <span className="text-[#DC2626]">ATLANTIC GRIP</span> <span className="text-white">TIRES</span>
          </div>

          <div className="hidden md:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-3">
              <Image
                src="/new1.png"
                alt="Atlantic Grip Tires"
                width={40}
                height={40}
                className="w-10 h-10"
                priority
              />
              <div className="font-bebas text-3xl font-black uppercase italic whitespace-nowrap" style={{ transform: 'skewX(-12deg)' }}>
                <span className="text-[#DC2626]">AG</span> <span className="text-white">TIRES</span>
              </div>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            {['Home', 'Services', 'Contact', 'About'].map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`font-bold text-lg transition-colors relative group cursor-pointer ${
                  item === 'Home' ? 'text-[#DC2626] hover:text-red-400' : 'text-white hover:text-primary'
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          ref={mobileMenuRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-black/98 backdrop-blur-xl border-t border-primary/20"
          role="menu"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col p-6 space-y-4">
            {['Home', 'Services', 'Contact', 'About'].map((item) => (
              <button
                key={item}
                role="menuitem"
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`text-left py-2 transition-colors ${
                  item === 'Home' ? 'text-[#DC2626] hover:text-red-400' : 'text-white hover:text-primary'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}