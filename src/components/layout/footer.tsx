'use client';

import Link from 'next/link';

import { BUSINESS_PROFILE, formatInlineList } from '@/lib/business-profile';

export function Footer() {
  const { address, phones, links, emails, branches } = BUSINESS_PROFILE;

  return (
    <footer className="bg-white mt-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-neutral-700">
        {/* How to Find Us */}
        <div className="text-center space-y-2">
          <h4 className="text-lg font-semibold text-primary-900">How to find us:</h4>
          <address className="not-italic leading-relaxed">
            {address.lines.map((line, index) => (
              <span key={`${line}-${index}`}>
                {line}
                <br />
              </span>
            ))}
          </address>

          <div className="pt-3">
            <h5 className="font-semibold text-primary-900">Areas We Cover</h5>
            <div className="mt-3">
              <h5 className="font-semibold text-primary-900">Active Branches</h5>
              <ul className="mt-1 space-y-1 text-neutral-700">
                {branches.map((branch) => (
                  <li key={branch.name}>
                    <span className="font-medium">Our {branch.name} branch</span>
                    {branch.coverageAreas?.length ? (
                      <span className="block">{formatInlineList(branch.coverageAreas)}</span>
                    ) : null}
                    {branch.coverageNote ? (
                      <span className="block text-neutral-600">{branch.coverageNote}</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center space-y-2">
          <h4 className="text-lg font-semibold text-primary-900">Contact Information</h4>
          <p>
            <a href={phones.primary.href} className="hover:underline">
              {phones.primary.display}
            </a>
          </p>
          <p>
            <a href={phones.mobile.href} className="hover:underline">
              {phones.mobile.display}
            </a>
          </p>
          <p>
            <a
              href={`mailto:${emails.careEnquiries}`}
              className="hover:underline text-primary-700 font-medium"
            >
              Contact our team
            </a>
          </p>
          <p>
            <a
              href={`mailto:${emails.admin}`}
              className="hover:underline text-primary-700 font-medium"
            >
              Ask about jobs
            </a>
          </p>
        </div>

        {/* External Links */}
        <div className="text-center space-y-2">
          <h4 className="text-lg font-semibold text-primary-900">External Links</h4>
          <ul className="space-y-1">
            <li>
              <a
                href={links.companiesHouse}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-primary-700"
              >
                Company Registration Information
              </a>
            </li>
            <li>
              <a
                href={links.cqcProvider}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-primary-700"
              >
                CQC Registration Information
              </a>
            </li>
            <li>
              <a
                href={links.cqcLocation}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-primary-700"
              >
                CQC Rating
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-xs text-center text-neutral-500 py-4 border-t border-gray-100">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-2">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/cookies" className="hover:underline">
            Cookie Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Use
          </Link>
        </div>
        <div>© {new Date().getFullYear()} Libra Support Services. All rights reserved.</div>
        <div className="mt-1 text-[0.7rem] text-neutral-400">Website by Szymik Digital</div>
      </div>
    </footer>
  );
}
