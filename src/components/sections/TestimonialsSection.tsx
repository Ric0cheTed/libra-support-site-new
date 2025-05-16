'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Thanks to Nicola I managed to get my medication as I could not get myself out the house due to surgery on a broken ankle. One phone call and answered straight away, and as soon as I said what I needed she collected them. Also, when I told her I was struggling as I could not have a shower etc., she told me the right people to contact and what mobility aids I might need. Within 3 days I had all the equipment I needed to shower independently.",
    name: "Sharon.",
	location: "Client"
  },
  {
    quote: "Nicola, Jess and their team support a family member who is elective mute. They have always engaged with him in a really positive way and it is clear that he enjoys the time he spends with them. The respite it gives us as a family has really improved all our lives, and I cannot thank them enough.",
    name: "Amy.",
	location: "Family Member"
  },
  {
    quote: "I contacted Nicola for some support when I split from my husband, pregnant, suffering with depression and have an autistic daughter to take care of; she was only too happy to help. Nicola came frequently to clean my house, pick some shopping up and helped with day-to-day tasks. She also became a very close confidant and supported me through a very difficult time. Nicola is extremely kind, caring, helpful, professional and trustworthy. I can’t thank her enough.",
    name: "Emily.",
	location: "Client"
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
