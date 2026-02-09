'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialsButton from '@/components/ui/SocialsButton';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';
import '@/styles/globals.css'; // Ensure Tailwind CSS is loaded
import { Lexend } from "next/font/google";
import { navItems } from "@/lib/nav";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en" className={lexend.variable}>
      <body className={`${lexend.className} min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50 text-[1.05rem] leading-relaxed`}>
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

            {/* Always-visible contact (desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:01706817672"
                className="text-sm font-semibold text-primary hover:underline"
              >
                Call: 01706 817 672
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
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}

              <div className="pt-3 border-t border-gray-100">
                <a
                  href="tel:01706817672"
                  className="block text-base font-semibold text-primary hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  Call: 01706 817 672
                </a>
                <a
                  href="mailto:nicola@librasupport.co.uk"
                  className="block text-base text-gray-700 hover:text-primary mt-2"
                  onClick={() => setMenuOpen(false)}
                >
                  nicola@librasupport.co.uk
                </a>
              </div>
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
