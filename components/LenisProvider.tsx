'use client'

import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'

declare global {
  interface Window {
    lenis?: Lenis
  }
}

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.2,
      smoothWheel: true
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    window.lenis = lenis

    return () => {
      window.lenis = undefined
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
