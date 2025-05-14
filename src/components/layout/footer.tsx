'use client';

import SocialsButton from '@/components/ui/SocialsButton';

export function Footer() {
  return (
    <footer className="bg-primary-100 text-primary-900 border-t border-primary-200 mt-24">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold tracking-wide">Libra Support Services</h4>
          <address className="not-italic leading-relaxed text-primary-800">
            Room 102, Todmorden Community College<br />
            Todmorden, OL14 7BX
          </address>
          <p>
            Phone:{' '}
            <a href="tel:01706817672" className="text-primary-700 hover:underline font-medium">
              (01706) 817672
            </a>
          </p>
          <p>
            Email:{' '}
            <a href="mailto:nicola@librasupport.co.uk" className="text-primary-700 hover:underline font-medium">
              nicola@librasupport.co.uk
            </a>
          </p>
        </div>

        {/* External Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold tracking-wide">External Links</h4>
          <ul className="space-y-2 text-primary-800">
            <li>
              <a
                href="https://find-and-update.company-information.service.gov.uk/company/13185381"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Company Registration
              </a>
            </li>
            <li>
              <a
                href="https://www.cqc.org.uk/provider/1-10610346970"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                CQC Provider Info
              </a>
            </li>
            <li>
              <a
                href="https://www.cqc.org.uk/location/1-11688271981"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                CQC Rating
              </a>
            </li>
          </ul>
        </div>

        {/* Partners + Socials */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold tracking-wide">Our Partners</h4>
          <div className="flex items-center gap-4">
            <img src="/images/andysmanclub.webp" alt="Andy's Man Club" className="h-8 w-auto" />
            <img src="/images/cqc-logo.webp" alt="CQC" className="h-8 w-auto" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-xs text-primary-700 text-center py-4 border-t border-primary-200">
        © {new Date().getFullYear()} Libra Support Services. All rights reserved.
      </div>
    </footer>
  );
}
