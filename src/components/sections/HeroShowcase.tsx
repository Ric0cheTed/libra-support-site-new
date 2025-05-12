'use client'

import { useEffect, useState } from 'react'

const slides = [
  {
    text: 'CQC Rated Good – Trusted, Accredited Care',
    image: '/images/hero-1.webp',
  },
  {
    text: '24/7 Live-In & Respite Services Across West Yorkshire',
    image: '/images/hero-2.webp',
  },
  {
    text: 'Locally Owned, Person-Centered Support Since 2021',
    image: '/images/hero-3.webp',
  },
  {
    text: 'Qualified, DBS-Checked Carers You Can Trust',
    image: '/images/hero-4.webp',
  }
]

export default function HeroShowcase() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length)
        setFade(true)
      }, 700) // fade-out before switch
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[500px] sm:h-[400px] bg-gray-900 text-white flex items-center justify-center overflow-hidden px-4 text-center">
      <div
        className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${fade ? 'opacity-80' : 'opacity-0'}`}
        style={{
          backgroundImage: `url(${slides[index].image})`
        }}
      />
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 max-w-3xl transition-opacity duration-1000 ease-in-out">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Libra Support Services
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          {slides[index].text}
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded shadow"
            href="/contact"
          >
            Request Support
          </a>
          <a
            className="border border-white text-white hover:bg-white hover:text-green-700 font-semibold px-6 py-3 rounded"
            href="/contact"
          >
            Speak to a Care Advisor
          </a>
        </div>
      </div>
    </section>
  )
}
