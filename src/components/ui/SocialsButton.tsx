'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Facebook, Share2 } from 'lucide-react';

const socials = [
  { name: 'Twitter', Icon: Twitter, url: 'https://twitter.com/yourprofile', angle: -175 },
  { name: 'Facebook', Icon: Facebook, url: 'https://www.facebook.com/LibraSupportCalderdale', angle: -135 },
  { name: 'LinkedIn', Icon: Linkedin, url: 'https://linkedin.com/in/yourprofile', angle: -90 },
];

const radius = 100;

export default function SocialsButton() {
  const [isExpanded, setExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14"
    >
      <div className="relative w-full h-full">
        <button
          onClick={() => setExpanded(!isExpanded)}
          className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 z-10 relative"
          aria-label="Open socials"
        >
          <Share2 className="w-5 h-5" />
        </button>

        {socials.map((social) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 left-1/2 rounded-full bg-white flex items-center justify-center shadow-md text-gray-800"
            style={{ transform: 'translate(-50%, -50%)' }}
            animate={
              isExpanded
                ? {
                    opacity: 1,
                    scale: 1,
                    x: Math.cos((social.angle * Math.PI) / 180) * radius,
                    y: Math.sin((social.angle * Math.PI) / 180) * radius,
                    transition: { type: 'spring', stiffness: 300, damping: 20 },
                  }
                : { opacity: 0, scale: 0, x: 0, y: 0 }
            }
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <social.Icon className="w-6 h-6" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
