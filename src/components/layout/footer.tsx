'use client';

import { BUSINESS_PROFILE, formatInlineList } from '@/lib/business-profile';

export function Footer() {
  const { address, areas, phones, email, links } = BUSINESS_PROFILE;

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
            <p className="text-neutral-700">
              {formatInlineList(areas.current)}
            </p>
            {areas.comingSoon.length > 0 ? (
              <p className="text-neutral-600 mt-2">Coming soon: {formatInlineList(areas.comingSoon)}</p>
            ) : null}
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
          {phones.secondary ? (
            <p>
              <a href={phones.secondary.href} className="hover:underline">
                {phones.secondary.display}
              </a>
            </p>
          ) : null}
          <p>
            <a
              href={`mailto:${email}`}
              className="hover:underline text-primary-700 font-medium"
            >
              {email}
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
        © {new Date().getFullYear()} Libra Support Services. All rights reserved.
      </div>
    </footer>
  );
}
