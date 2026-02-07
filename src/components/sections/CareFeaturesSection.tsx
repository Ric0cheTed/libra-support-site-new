'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaHandshake,
  FaUsers,
  FaGraduationCap,
  FaTasks,
  FaShieldAlt,
  FaCheckCircle,
  FaBuilding,
} from 'react-icons/fa'

export function CareFeaturesSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [controls, inView])

  const features = [
    {
      icon: <FaHandshake className="text-orange-500 text-4xl mb-4 mx-auto" />,
      title: 'LGBT Inclusivity',
      description:
        'We provide inclusive and personalised support to our diverse LGBTQ community in Calderdale and are a founding member of Transfriendly.',
    },
    {
      icon: <FaUsers className="text-orange-500 text-4xl mb-4 mx-auto" />,
      title: 'Community',
      description:
        'We launched a pen pal scheme with Ferney Lee School, pairing students with older adults to build meaningful connections across generations.',
    },
    {
      icon: <FaGraduationCap className="text-orange-500 text-4xl mb-4 mx-auto" />,
      title: 'Training',
      description:
        'We maintain high standards with regular training via The Grey Matter Learning and local partners like Keane Training.',
    },
    {
      icon: <FaTasks className="text-orange-500 text-4xl mb-4 mx-auto" />,
      title: 'Care Management',
      description:
        'Family and staff can access care plans securely via Roundsys software, making it easy to track care progress anytime.',
    },
    {
      icon: <FaCheckCircle className="text-orange-500 text-4xl mb-4 mx-auto" />,
      title: 'Insured and CQC Registered',
      description:
        'Registered with the CQC in Sept 2021, rated GOOD. We deliver high-quality, compassionate, and person-centred care.',
    },
    {
      icon: <FaBuilding className="text-orange-500 text-4xl mb-4 mx-auto" />,
      title: 'Local Support',
      description:
        "We work with Women's Open Talk for peer support. Learn more via our Facebook pages.",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto px-4 text-center space-y-12"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-bold text-primary">
          We are committed to our clients and proudly compliant in the Upper Valley of Calderdale.
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Here's how we meet best practices and go above and beyond for our community.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-lg shadow transition hover:shadow-md"
            >
              {feature.icon}
              <h3 className="text-lg font-semibold text-orange-600 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
