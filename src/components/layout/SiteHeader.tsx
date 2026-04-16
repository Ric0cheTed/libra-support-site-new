'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { navItems } from '@/lib/nav';
import { BUSINESS_PROFILE } from '@/lib/business-profile';

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { phones } = BUSINESS_PROFILE;

  const closeMenu = () => setMenuOpen(false);

  const outOfHoursPhone = {
    href: 'tel:07777157530',
    display: '07777 157 530',
  };

  const contactEmail = 'kelly@librasupport.co.uk';

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <Image
              src="/images/libra-full-logo.webp"
              alt="Libra Support Logo"
              width={160}
              height={50}
              priority
              className="h-auto w-auto max-h-12 object-contain"
            />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6 text-base font-medium text-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-gray-700 hover:text-primary transition ${
                pathname === item.href ? 'text-primary font-semibold' : ''
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href={phones.primary.href} className="text-sm font-semibold text-primary hover:underline">
            Call: {phones.primary.display}
          </a>
          <a
            href={outOfHoursPhone.href}
            className="text-sm font-semibold text-primary hover:underline"
          >
            Out of hours: {outOfHoursPhone.display}
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded text-primary hover:bg-blue-100"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-base text-gray-700 hover:text-primary"
              onClick={closeMenu}
            >
              {item.title}
            </Link>
          ))}

          <div className="pt-3 border-t border-gray-100">
            <a
              href={phones.primary.href}
              className="block text-base font-semibold text-primary hover:underline"
              onClick={closeMenu}
            >
              Call: {phones.primary.display}
            </a>
            <a
              href={outOfHoursPhone.href}
              className="block text-base font-semibold text-primary hover:underline mt-2"
              onClick={closeMenu}
            >
              Out of hours: {outOfHoursPhone.display}
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="block text-base text-gray-700 hover:text-primary mt-2"
              onClick={closeMenu}
            >
              {contactEmail}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}