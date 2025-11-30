'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type FormData = {
  name: string
  phone: string
  email: string
  service: string
  date: string
  notes: string
}

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    mode: 'onBlur'
  })

  const onSubmit = async (data: FormData) => {
    if (formStatus === 'loading') return

    setSubmitError(null)
    setFormStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result?.message || 'Unable to submit booking right now.')
      }

      setFormStatus('success')

      setTimeout(() => {
        setFormStatus('idle')
        reset()
      }, 3000)
    } catch (error) {
      console.error('Booking submission failed', error)
      setSubmitError('Something went wrong. Please try again or call us directly.')
      setFormStatus('idle')
    }
  }

  const contactInfo = [
    {
      title: 'Location',
      content: (
        <a
          href="https://www.google.com/maps/search/?api=1&query=934+Topsail+Road+Mount+Pearl+NL+A1N+5L3+Canada"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:text-white transition-colors"
        >
          934 Topsail Road, Mount Pearl<br />
          St. John&apos;s, NL, Canada<br />
          A1N 5L3
        </a>
      ),
      icon: (
        <svg className="w-5 h-5 text-blue-400" style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      )
    },
    {
      title: 'Contact',
      content: (
        <div className="space-y-1">
          <a href="tel:+17093511126" className="block text-white/70 hover:text-white transition-colors">+1 (709) 351-1126</a>
          <a href="mailto:atlanticgriptires@gmail.com" className="block text-white/70 hover:text-white transition-colors">atlanticgriptires@gmail.com</a>
        </div>
      ),
      icon: (
        <svg className="w-5 h-5 text-blue-400" style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
        </svg>
      )
    }
  ]

  const inputBaseClass = "w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 transition focus:outline-none"
  const inputNormalClass = `${inputBaseClass} border border-white/15 focus:border-primary`
  const inputErrorClass = `${inputBaseClass} border-2 border-red-500 focus:border-red-400`

  return (
    <section id="contact" className="section-padding bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-40" aria-hidden="true"
        style={{ background: 'radial-gradient(circle at top left, rgba(220,38,38,0.32), transparent 55%)' }}
      />
      <div className="container-custom relative">
        <div ref={ref} className="grid gap-12 lg:grid-cols-2 relative">
          <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2" aria-hidden="true">
            <div className="relative h-full w-1">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#DC2626] to-transparent opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF0000] via-50% to-transparent blur-sm"></div>
              <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#FF0000] via-50% to-transparent"></div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-black md:text-5xl"><span className="text-[#DC2626]">Get</span> <span className="text-white">in Touch</span></h2>
            <p className="text-white/70 text-lg max-w-xl">
              Your one-stop shop for quality tires. Walk-ins welcome or book online!
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon}
                      <h4 className="text-sm uppercase tracking-[0.25em] text-[#DC2626] font-bold">{item.title}</h4>
                    </div>
                    <div className="whitespace-pre-line text-sm text-white/70">{item.content}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="section-shell relative overflow-hidden px-4 py-6 sm:px-6 sm:py-8 md:px-10 text-white max-w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" aria-hidden="true" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white">Schedule Your Visit</h3>
              <p className="mt-2 text-sm text-white/60">
                Don&apos;t wait in line - schedule now! Walk-ins also welcome.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4 overflow-hidden" noValidate>
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    className={errors.name ? inputErrorClass : inputNormalClass}
                    {...register('name', {
                      required: 'Name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' }
                    })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    className={errors.phone ? inputErrorClass : inputNormalClass}
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[\d\s\-+()]{7,}$/,
                        message: 'Please enter a valid phone number'
                      }
                    })}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    className={errors.email ? inputErrorClass : inputNormalClass}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Service Field */}
                <div>
                  <select
                    aria-invalid={errors.service ? 'true' : 'false'}
                    className={`${errors.service ? inputErrorClass : inputNormalClass} [&>option]:bg-gray-900`}
                    {...register('service', {
                      required: 'Please select a service'
                    })}
                  >
                    <option value="">Select Service</option>
                    <option value="New Tire Purchase">New Tire Purchase</option>
                    <option value="Tire Installation">Tire Installation</option>
                    <option value="Seasonal Changeover">Seasonal Changeover</option>
                    <option value="Tire Rotation">Tire Rotation</option>
                    <option value="Free Inspection">Free Inspection</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.service.message}
                    </p>
                  )}
                </div>

                {/* Date Field (optional) */}
                <div>
                  <label className="text-xs text-white/50 mb-1 block">Preferred Date (optional)</label>
                  <input
                    type="date"
                    className={inputNormalClass}
                    {...register('date')}
                  />
                </div>

                {/* Notes Field (optional) */}
                <textarea
                  placeholder="Additional Notes (Vehicle type, tire size, etc.)"
                  rows={3}
                  className={`${inputNormalClass} resize-none border-white/10`}
                  {...register('notes')}
                />

                {submitError && (
                  <p className="text-sm text-red-400">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className={`w-full rounded-full px-6 py-4 text-sm font-semibold uppercase tracking-[0.35em] transition-all duration-300 ${
                    formStatus === 'success'
                      ? 'bg-green-500 text-white'
                      : formStatus === 'loading'
                      ? 'bg-black/50 text-white cursor-wait'
                      : 'bg-[#DC2626] text-white hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(220,38,38,0.35)]'
                  }`}
                >
                  {formStatus === 'success'
                    ? 'Booking Confirmed!'
                    : formStatus === 'loading'
                    ? 'Sending...'
                    : 'Book Appointment'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
