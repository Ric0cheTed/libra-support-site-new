'use client'

import { useEffect, useState } from 'react'

const sellingPoints = [
  'CQC Rated Good – Trusted, Accredited Care',
  'Compassionate Live-In & Respite Services',
  'Locally Owned – Serving West Yorkshire Since 2021',
  '24/7 Support with Qualified, DBS-Checked Carers'
]

export default function HeroBanner() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sellingPoints.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[500px] sm:h-[400px] bg-primary text-white flex items-center justify-center overflow-hidden px-4 text-center">
      <div className="max-w-3xl z-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Libra Support Services
        </h1>
        <p className="text-lg sm:text-xl">
          {sellingPoints[index]}
        </p>
      </div>
      <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-optimized.webp)' }} />
    </section>
  )
}
