'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const values = [
  'Direct Import Advantage',
  'Curated Inventory',
  'Expert-Led Operations',
  'Supply Chain Resilience'
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(248,113,113,0.08),transparent_55%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-40" aria-hidden="true" />
      <div className="container-custom relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="section-shell px-6 py-10 md:px-12 md:py-14"
        >
          <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center">
            <div className="space-y-8 text-white/90">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-black">
                  <span className="text-[#DC2626]">About</span> <span className="text-white">Us</span>
                </h2>
                <div className="space-y-7 text-base leading-relaxed text-white/80 md:text-lg">
                  <div>
                    <p className="text-justify">
                      AG Tires is a direct import and retail business based in Newfoundland and Labrador (NL), committed to becoming the province&apos;s leading customer-focused tire provider. Our mission is to offer high-quality tires at competitive prices, with a diverse selection suited to local conditions and exceptional service that caters to all socio-economic groups. By utilizing a direct import model, we streamline our supply chain to deliver greater value to both individual customers and commercial clients throughout NL.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Vision</h3>
                    <p className="text-justify">
                      To be the leading and most trusted provider of high-quality, competitively priced tires and comprehensive tire services in Newfoundland and Labrador, recognized for our commitment to customer safety, value, and operational excellence.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Mission</h3>
                    <p className="text-justify">
                      Atlantic Grip Tires is dedicated to providing Newfoundland and Labrador residents and businesses with the optimal tire solutions for their unique driving conditions. Through a streamlined direct import and distribution model, we will ensure access to a diverse range of high-performance tires, supported by expert advice and exceptional service, thereby enhancing safety, delivering superior value, and ensuring convenience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Values</h3>
                <ul className="grid gap-3 text-white/80">
                  {values.map((value) => (
                    <li key={value} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3">
                      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary"></span>
                      <span className="text-base font-medium text-white">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 text-sm text-white/70 backdrop-blur">
                <p>Direct import model. Streamlined supply chain. Expert-led service for Newfoundland &amp; Labrador drivers.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
