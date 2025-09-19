'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    title: 'New Tire Sales',
    description: 'Wide selection of premium brands for all vehicle types'
  },
  {
    title: 'Tire Installation',
    description: 'Expert mounting and precision balancing'
  },
  {
    title: 'Seasonal Changeover',
    description: 'Swift winter/summer tire swaps'
  },
  {
    title: 'Flat Tire Repair',
    description: 'Professional puncture repairs'
  },
  {
    title: 'Tire Rotation',
    description: 'Extend tire life with regular rotation'
  },
  {
    title: 'Free Inspection',
    description: 'Complimentary tire health check'
  }
]

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

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="services" className="section-padding bg-zinc-900/30 sm:bg-transparent">
      <div className="container-custom">
        <div ref={ref} className="relative">
          <div className="hidden lg:block absolute inset-y-0 left-1/2 w-px bg-white/12" aria-hidden="true" />

          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75 }}
              className="space-y-8 lg:pr-14"
            >
              <h2 className="text-4xl font-black md:text-5xl"><span className="text-[#DC2626]">Our</span> <span className="text-white">Services</span></h2>

              <div className="hidden sm:grid gap-6 md:grid-cols-2">
                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.05, duration: 0.45 }}
                    className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#11131b] p-6 text-left transition-transform duration-300 hover:-translate-y-1 hover:border-primary/60"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" aria-hidden="true" />
                    <div className="relative z-10 space-y-3">
                      <div>
                        <h3 className="font-bebas text-2xl leading-tight tracking-[0.08em] text-primary drop-shadow-[0_0_6px_rgba(220,38,38,0.25)]">{service.title}</h3>
                        <p className="mt-3 text-sm text-white/80">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="sm:hidden space-y-2">
                {services.map((service) => (
                  <div key={service.title} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <div>
                      <span className="text-white font-medium text-sm">{service.title}</span>
                      <span className="text-white/60 text-xs block">{service.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              id="why-ag"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="space-y-8 lg:pl-14"
            >
              <h2 className="text-4xl font-black text-white md:text-5xl">Why Choose <span className="text-[#DC2626]">AG</span> <span className="text-white">Tires</span></h2>

              <div className="hidden sm:block space-y-5">
                {advantages.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.25 + index * 0.06, duration: 0.45 }}
                    className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#11131b] p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/60"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" aria-hidden="true" />
                    <div className="relative z-10 space-y-3">
                      <div>
                        <h3 className="font-bebas text-2xl leading-tight tracking-[0.08em] text-primary drop-shadow-[0_0_6px_rgba(220,38,38,0.25)]">{item.title}</h3>
                        <p className="mt-3 text-sm text-white/80">{item.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="sm:hidden space-y-2">
                {advantages.map((item) => (
                  <div key={item.title} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <div>
                      <span className="text-white font-medium text-sm">{item.title}</span>
                      <span className="text-white/60 text-xs block">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
