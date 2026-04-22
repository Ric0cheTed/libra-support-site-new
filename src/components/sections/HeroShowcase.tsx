'use client'

import { useEffect, useState } from 'react'

import { BUSINESS_PROFILE, formatInlineList } from '@/lib/business-profile'

const slides = [
  {
    text: 'CQC Rated Good with local, person-centred support',
    image: '/images/hero-1.webp',
  },
  {
    text: 'Flexible home care, live-in care, and respite support',
    image: '/images/hero-2.webp',
  },
  {
    text: 'Managed continuity, DBS-checked carers, and dependable cover',
    image: '/images/hero-3.webp',
  },
  {
    text: 'Supporting families across Calderdale with trusted care at home',
    image: '/images/hero-4.webp',
  },
]

export default function HeroShowcase() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  const areaList = formatInlineList(BUSINESS_PROFILE.areas.current)
  const phone = BUSINESS_PROFILE.phones.primary

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)

      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length)
        setFade(true)
      }, 700)

      return () => clearTimeout(timeout)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[560px] sm:min-h-[520px] bg-gray-900 text-white flex items-center justify-center overflow-hidden px-4 text-center">
      <div
        className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${fade ? 'opacity-80' : 'opacity-0'}`}
        style={{
          backgroundImage: `url(${slides[index].image})`,
        }}
      />
      <div className="absolute inset-0 bg-black/55 z-0" />

      <div className="relative z-10 max-w-4xl py-16">
        <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/95 backdrop-blur-sm border border-white/20 mb-5">
          {slides[index].text}
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
          CQC-regulated home care in Todmorden, Hebden Bridge and Mytholmroyd
        </h1>

        <p className="text-lg sm:text-xl max-w-3xl mx-auto text-white/95 mb-6">
          Support with daily living, live-in care and respite care for older adults and families
          who need dependable help at home.
        </p>

        <p className="text-sm sm:text-base text-white/85 max-w-2xl mx-auto mb-8">
          Libra Support Services provides local, person-centred care across {areaList}, with
          trained, DBS-checked carers, managed continuity, and responsive support when families
          need reassurance most.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium">
            Home care
          </span>
          <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium">
            Live-in care
          </span>
          <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium">
            Respite care
          </span>
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          <a
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded shadow"
            href="/contact"
          >
            Request a care call
          </a>
          <a
            className="border border-white text-white hover:bg-white hover:text-green-700 font-semibold px-6 py-3 rounded"
            href={phone.href}
          >
            Call now: {phone.display}
          </a>
        </div>

        <p className="mt-5 text-sm sm:text-base text-white/90">
          Speak to our team about home care, live-in care, respite support, and next steps for a
          free needs assessment.
        </p>
      </div>
    </section>
  )
}