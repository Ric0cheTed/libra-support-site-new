'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Libra Support Services gave our family peace of mind. The carers are incredibly compassionate and professional.",
    name: "Sarah P.",
    location: "Todmorden"
  },
  {
    quote: "They treated my father like family. Highly recommended if you need true, caring support at home.",
    name: "James R.",
    location: "West Yorkshire"
  },
  {
    quote: "We couldn't have asked for better home care. Truly life-changing service.",
    name: "Lisa M.",
    location: "Calderdale"
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-secondary">What Our Clients Say</h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gray-50 rounded-lg shadow-md p-6 relative border border-gray-100 hover:shadow-lg transition"
            >
              <FaQuoteLeft className="absolute top-4 left-4 text-primary opacity-10 text-3xl" />
              <p className="text-gray-700 text-sm italic mb-6">"{testimonial.quote}"</p>
              <p className="text-sm font-semibold text-primary">
                — {testimonial.name}, <span className="font-medium">{testimonial.location}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
