import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';

import SiteHeader from '@/components/layout/SiteHeader';
import SocialsButton from '@/components/ui/SocialsButton';
import { Footer } from '@/components/layout/footer';

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Libra Support Services',
  description: 'CQC-regulated care at home across Todmorden, Hebden Bridge, Mytholmroyd and Burnley.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lexend.variable}>
      <body className="min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50 text-[1.05rem] leading-relaxed">
        <SiteHeader />

        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">{children}</main>

        <SocialsButton />
        <Footer />
      </body>
    </html>
  );
}
