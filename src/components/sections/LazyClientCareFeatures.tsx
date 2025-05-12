'use client'

import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'

const ClientCareFeaturesWrapper = dynamic(() => import('./ClientCareFeaturesWrapper'), { ssr: false })

export default function LazyClientCareFeatures() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <div ref={ref}>
      {inView && <ClientCareFeaturesWrapper />}
    </div>
  )
}
