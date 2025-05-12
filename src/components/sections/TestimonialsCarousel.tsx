'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote: "Libra Support Services gave our family peace of mind. The carers are incredibly compassionate and professional.",
    name: "Sarah P.",
    location: "Todmorden",
    avatar: "/images/avatars/sarah.webp"
  },
  {
    quote: "They treated my father like family. Highly recommended if you need true, caring support at home.",
    name: "James R.",
    location: "West Yorkshire",
    avatar: "/images/avatars/james.webp"
  },
  {
    quote: "We couldn't have asked for better home care. Truly life-changing service.",
    name: "Lisa M.",
    location: "Calderdale",
    avatar: "/images/avatars/lisa.webp"
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-secondary">What Our Clients Say</h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
              >
                <div className="flex flex-col items-center">
                  {t.avatar && (
                    <img alt="Client photo"
                      src={t.avatar}
                      alt={t.name}
                      className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-primary"
                    />
                  )}
                  <p className="text-gray-700 italic mb-6">"{t.quote}"</p>
                  <p className="text-sm font-semibold text-primary">
                    — {t.name}, <span className="font-medium">{t.location}</span>
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
