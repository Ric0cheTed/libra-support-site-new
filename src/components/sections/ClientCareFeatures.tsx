'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaPills,
  FaHandsWash,
  FaAppleAlt,
  FaStar,
  FaHome,
  FaMoneyCheckAlt,
  FaHeart,
} from 'react-icons/fa'

export function ClientCareFeatures() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [controls, inView])

  const features = [
    {
      icon: <FaPills className="text-primary text-4xl mb-4 mx-auto" />,
      title: 'Medication Assistance',
      description: 'Ensuring the right meds at the right time, every time.',
    },
    {
      icon: <FaHandsWash className="text-primary text-4xl mb-4 mx-auto" />,
      title: 'Personal Hygiene',
      description: 'Helping clients maintain dignity and daily self-care routines.',
    },
    {
      icon: <FaAppleAlt className="text-primary text-4xl mb-4 mx-auto" />,
      title: 'Diet and Nutrition',
      description: 'We ensure all clients are properly fed with food they love.',
    },
    {
      icon: <FaStar className="text-primary text-4xl mb-4 mx-auto" />,
      title: 'Qualified Care',
      description: 'All carers attend accredited training for optimal support.',
    },
    {
      icon: <FaHome className="text-primary text-4xl mb-4 mx-auto" />,
      title: 'Household Management',
      description: 'Cleaning, errands, outings, and daily home upkeep.',
    },
    {
      icon: <FaMoneyCheckAlt className="text-primary text-4xl mb-4 mx-auto" />,
      title: 'Paying Bills and Budgeting',
      description: 'We handle the stress of household finances so you can relax.',
    },
    {
      icon: <FaHeart className="text-primary text-4xl mb-4 mx-auto" />,
      title: 'Companionship',
      description:
        'We offer genuine connection, conversation, and care. Our penpal scheme also builds cross-generational bonds.',
    },
  ]

  return (
    <motion.section
      ref={ref}
      className="py-20 bg-white overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center space-y-12">
        <h2 className="text-3xl font-bold text-primary">
          Find yourself or a loved one the support that they deserve.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-muted rounded-lg shadow transition hover:shadow-md"
            >
              {feature.icon}
              <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
