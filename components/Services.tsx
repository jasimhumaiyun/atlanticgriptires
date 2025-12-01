'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    title: 'New Tire Sales',
    description: 'Wide selection of brands for all vehicles'
  },
  {
    title: 'Tire Installation & Balancing',
    description: 'Expert mounting and precision balancing'
  },
  {
    title: 'Seasonal Changeover',
    description: 'Swift winter/summer tire swaps'
  },
  {
    title: 'Tire Rotation',
    description: 'Extend tire life with regular rotation'
  },
  {
    title: 'Free Brake Inspection',
    description: 'Complimentary brake inspection during tire change'
  }
]

const advantages = [
  {
    title: 'Wide Selection of Brands',
    detail: 'Premium tire brands for sedans, SUVs, light trucks & performance vehicles.'
  },
  {
    title: 'Expert Advice',
    detail: 'Our tire specialists help you choose the right fit for your needs.'
  },
  {
    title: 'Fast Installation',
    detail: 'No appointment required.'
  },
  {
    title: 'Competitive Pricing',
    detail: 'Quality tires at affordable rates through direct import advantage.'
  },
  {
    title: 'Free Services',
    detail: 'Complimentary brake inspection during tire change.'
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
