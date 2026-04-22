'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaUserFriends, FaClock } from 'react-icons/fa';

import { BUSINESS_PROFILE, formatInlineList } from '@/lib/business-profile';

const services = [
  {
    title: 'Home Care',
    description:
      'Flexible support with daily living, personal care, medication prompts, meal preparation, and routines that help people stay safe and independent at home.',
    bestFor:
      'Best for older adults or families who need regular support with day-to-day living while remaining at home.',
    href: '/services/home-care',
    icon: <FaHome size={36} className="text-primary mx-auto mb-4" />,
  },
  {
    title: 'Live-in Care',
    description:
      'Round-the-clock support and companionship from a trusted carer, helping people remain in familiar surroundings with more consistent reassurance.',
    bestFor:
      'Best for people who need ongoing support, greater continuity, or reassurance throughout the day and night.',
    href: '/services/live-in-care',
    icon: <FaUserFriends size={36} className="text-primary mx-auto mb-4" />,
  },
  {
    title: 'Respite Care',
    description:
      'Short-term, planned, or emergency support that gives families flexibility while making sure care continues safely and reliably at home.',
    bestFor:
      'Best for family carers who need cover, temporary support, or extra help during changing circumstances.',
    href: '/services/respite-care',
    icon: <FaClock size={36} className="text-primary mx-auto mb-4" />,
  },
];

export default function ServicesOverviewSection() {
  const areaList = formatInlineList(BUSINESS_PROFILE.areas.current);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-secondary">Our care services</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-12">
          We provide practical, compassionate support across {areaList}, with care designed around
          the person, the family, and the level of help needed at home.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between text-left hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <div>
                {service.icon}
                <h3 className="text-xl font-semibold text-primary mb-3 text-center">{service.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 text-center">
                  {service.description}
                </p>

                <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                    Best for
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">{service.bestFor}</p>
                </div>
              </div>

              <Link
                href={service.href}
                className="mt-6 inline-block px-4 py-2 bg-primary text-white text-sm font-medium rounded hover:bg-primary-dark text-center"
              >
                Learn more
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <p className="text-sm text-gray-600">
            Not sure which type of care is right for your situation?{' '}
            <Link href="/contact" className="underline">
              Request a care call
            </Link>{' '}
            to talk through your needs, or{' '}
            <Link href="/care-fees" className="underline">
              view care fees
            </Link>{' '}
            and{' '}
            <Link href="/areas" className="underline">
              areas we cover
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}