'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialsButton from '@/components/ui/SocialsButton';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';
import '@/styles/globals.css'; // Ensure Tailwind CSS is loaded

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50 text-[1.05rem] leading-relaxed">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3">
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
            <nav className="hidden md:flex space-x-6 text-base font-medium text-muted-foreground">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-primary transition ${
                    pathname === item.href ? 'text-primary font-semibold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
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
                  className="block text-base text-muted-foreground hover:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">{children}</main>

        {/* Floating Social Button */}
        <SocialsButton />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
