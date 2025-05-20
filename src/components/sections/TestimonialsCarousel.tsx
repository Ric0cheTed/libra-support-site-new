'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote:
      "Thanks to Nicola I managed to get my medication as I could not get myself out the house due to surgery on a broken ankle. One phone call and answered straight away, and as soon as I said what I needed she collected them. Also, when I told her I was struggling as I could not have a shower etc., she told me the right people to contact and what mobility aids I might need. Within 3 days I had all the equipment I needed to shower independently.",
    name: "Sharon",
    location: "Client"
  },
  {
    quote:
      "Nicola, Jess and their team support a family member who is elective mute. They have always engaged with him in a really positive way and it is clear that he enjoys the time he spends with them. The respite it gives us as a family has really improved all our lives, and I cannot thank them enough.",
    name: "Amy",
    location: "Family Member"
  },
  {
    quote:
      "I contacted Nicola for some support when I split from my husband, pregnant, suffering with depression and have an autistic daughter to take care of; she was only too happy to help. Nicola came frequently to clean my house, pick some shopping up and helped with day-to-day tasks. She also became a very close confidant and supported me through a very difficult time. Nicola is extremely kind, caring, helpful, professional and trustworthy. I can’t thank her enough.",
    name: "Emily",
    location: "Client"
  },
  {
    quote:
      "Libra Care was initially needed after my decline in mobility, numerous falls and visits to the hospital. Thanks to Libra Support Services, I now receive 4 calls a day and the fantastic team provides support with all the tasks I struggled with. I find the team to be friendly and efficient, and I’m highly satisfied with the quality of care I receive. I look forward to my visits.",
    name: "—",
    location: "Client"
  }
];

const Star = () => (
  <svg
    className="w-4 h-4 fill-yellow-400 stroke-yellow-600"
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="currentColor"
    fill="currentColor"
  >
    <path d="M12 .587l3.668 7.571L24 9.748l-6 5.905 1.417 8.267L12 18.896l-7.417 5.024L6 15.653 0 9.748l8.332-1.59z" />
  </svg>
);

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[index];

  return (
    <section className="relative w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
        <p className="text-lg text-gray-600">
          We’re proud to support families across West Yorkshire with compassionate, professional care.
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <figure className="bg-white rounded-2xl shadow-md p-8 text-left">
            <blockquote>
              <p className="text-lg leading-relaxed text-gray-700 italic">"{t.quote}"</p>
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-between border-t pt-4 border-gray-200">
              <div>
                <div className="text-base font-semibold text-primary">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.location}</div>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
            </figcaption>
          </figure>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
