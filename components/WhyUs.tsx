'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const advantages = [
  {
    title: 'Direct Import Advantage',
    detail: 'Streamlined supply chain delivering greater value throughout NL.'
  },
  {
    title: 'Local Weather Expertise',
    detail: 'Curated inventory suited to Newfoundland & Labrador conditions.'
  },
  {
    title: '60-Minute Install',
    detail: 'Expert team completes installations in 60 minutes.'
  },
  {
    title: 'Expert-Led Operations',
    detail: 'Expert advice and exceptional service from tire specialists.'
  }
]

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.why-line', {
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      })

      gsap.from('.why-card', {
        y: 60,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.18,
        duration: 0.9,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          once: true
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="why-ag" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_55%)]" aria-hidden="true" />
      <div className="container-custom relative" ref={sectionRef}>
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-chip bg-white/10 text-white/70">Why Us</span>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">Why Choose AG Tires</h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="absolute left-4 top-0 bottom-0 hidden w-[2px] bg-gradient-to-b from-primary via-white/70 to-transparent md:block why-line" aria-hidden="true" />
          <div className="space-y-8 md:pl-16">
            {advantages.map((item, index) => (
              <div key={item.title} className="why-card group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true"
                  style={{ background: 'linear-gradient(135deg, rgba(220,38,38,0.18), transparent 65%)' }}
                />
                <div className="relative z-10 flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
                  <div className="flex items-center gap-4">
                    <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/30 text-sm font-semibold text-white md:flex">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white/80 md:text-base">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
