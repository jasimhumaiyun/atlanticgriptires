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
  },
  {
    title: 'Free Tire Rotation',
    description: 'Complimentary rotation after 6 months of purchase'
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
          <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2" aria-hidden="true">
            <div className="relative h-full w-1">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#DC2626] to-transparent opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF0000] via-50% to-transparent blur-sm"></div>
              <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#FF0000] via-50% to-transparent"></div>
            </div>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75 }}
              className="space-y-8 lg:pr-14"
            >
              <h2 className="text-4xl font-black md:text-5xl"><span className="text-[#DC2626]">Our</span> <span className="text-white">Services</span></h2>

              <div className="rounded-2xl border border-white/15 bg-black/50 backdrop-blur-xl p-6">
                <div className="space-y-4">
                  {services.map((service, i) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.05, duration: 0.45 }}
                      className="flex items-start gap-3"
                    >
                      <svg className="w-4 h-4 text-[#DC2626] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                        <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      <div>
                        <h3 className="text-white font-semibold">{service.title}</h3>
                        <p className="text-white/60 text-sm mt-0.5">{service.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              id="why-ag"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="space-y-8 lg:pl-14"
            >
              <h2 className="text-4xl font-black md:text-5xl"><span className="text-[#DC2626]">Why</span> <span className="text-white">Choose AG Tires</span></h2>

              <div className="rounded-2xl border border-white/15 bg-black/50 backdrop-blur-xl p-6">
                <div className="space-y-4">
                  {advantages.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.25 + index * 0.06, duration: 0.45 }}
                      className="flex items-start gap-3"
                    >
                      <svg className="w-4 h-4 text-[#DC2626] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                        <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      <div>
                        <h3 className="text-white font-semibold">{item.title}</h3>
                        <p className="text-white/60 text-sm mt-0.5">{item.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
