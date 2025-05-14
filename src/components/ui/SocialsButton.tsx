'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Linkedin, Github, Share2 } from 'lucide-react';

const socials = [
  { name: 'Twitter', Icon: Twitter, url: 'https://twitter.com/yourprofile', angle: -135 },
  { name: 'Instagram', Icon: Instagram, url: 'https://instagram.com/yourprofile', angle: -90 },
  { name: 'LinkedIn', Icon: Linkedin, url: 'https://linkedin.com/in/yourprofile', angle: -180 },
  { name: 'GitHub', Icon: Github, url: 'https://github.com/yourprofile', angle: -45 },
];

const radius = 80;

const variants = {
  initial: { opacity: 0, scale: 0, x: 0, y: 0 },
  open: (custom) => ({
    opacity: 1,
    scale: 1,
    x: Math.cos((custom.angle * Math.PI) / 180) * custom.radius,
    y: Math.sin((custom.angle * Math.PI) / 180) * custom.radius,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  }),
  closed: { opacity: 0, scale: 0, x: 0, y: 0 },
};

export default function SocialsButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14"
    >
      <div className="relative w-full h-full">
        <button
          className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 z-10"
          aria-label="Open socials"
        >
          <Share2 className="w-5 h-5" />
        </button>

        {socials.map((social, i) => (
          <motion.a
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 left-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md"
            style={{ transform: 'translate(-50%, -50%)' }}
            custom={{ angle: social.angle, radius }}
            initial="initial"
            animate={isOpen ? 'open' : 'closed'}
            variants={variants}
          >
            <social.Icon className="w-5 h-5 text-gray-800" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
