'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaUserFriends, FaClock } from 'react-icons/fa';

const services = [
  {
    title: 'Home Care',
    description: 'Flexible, personalized home care to support daily living and independence.',
    href: '/services/home-care',
    icon: <FaHome size={36} className="text-primary mx-auto mb-4" />,
  },
  {
    title: 'Live-in Care',
    description: '24/7 care and companionship from trusted professionals, at home.',
    href: '/services/live-in-care',
    icon: <FaUserFriends size={36} className="text-primary mx-auto mb-4" />,
  },
  {
    title: 'Respite Care',
    description: 'Short-term or emergency care giving families peace of mind and flexibility.',
    href: '/services/respite-care',
    icon: <FaClock size={36} className="text-primary mx-auto mb-4" />,
  },
];

export default function ServicesOverviewSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-secondary">Our Care Services</h2>

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
                <h3 className="text-xl font-semibold text-primary mb-2 text-center">{service.title}</h3>
                <p className="text-gray-700 text-sm text-center">{service.description}</p>
              </div>
              <Link
                href={service.href}
                className="mt-6 inline-block px-4 py-2 bg-primary text-white text-sm font-medium rounded hover:bg-primary-dark text-center"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
