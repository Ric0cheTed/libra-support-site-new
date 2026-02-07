'use client';

export function Footer() {
  return (
    <footer className="bg-white mt-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-neutral-700">

        {/* How to Find Us */}
        <div className="text-center space-y-2">
          <h4 className="text-lg font-semibold text-primary-900">How to find us:</h4>
          <address className="not-italic leading-relaxed">
            Room 102,<br />
            Todmorden Community College,<br />
            Todmorden,<br />
            OL14 7BX
          </address>

          <div className="pt-3">
            <h5 className="font-semibold text-primary-900">Areas We Cover</h5>
            <p className="text-neutral-700">
              Todmorden • Hebden Bridge • Mytholmroyd • Burnley • Cliviger • Worsthorne • Pike Hill
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center space-y-2">
          <h4 className="text-lg font-semibold text-primary-900">Contact Information</h4>
          <p>
            <a href="tel:01706817672" className="hover:underline">
              01706 817 672
            </a>
          </p>
          <p>
            <a href="tel:07751123507" className="hover:underline">
              07751 123 507
            </a>
          </p>
          <p>
            <a
              href="mailto:nicola@librasupport.co.uk"
              className="hover:underline text-primary-700 font-medium"
            >
              nicola@librasupport.co.uk
            </a>
          </p>
        </div>

        {/* External Links */}
        <div className="text-center space-y-2">
          <h4 className="text-lg font-semibold text-primary-900">External Links</h4>
          <ul className="space-y-1">
            <li>
              <a
                href="https://find-and-update.company-information.service.gov.uk/company/13185381"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-primary-700"
              >
                Company Registration Information
              </a>
            </li>
            <li>
              <a
                href="https://www.cqc.org.uk/provider/1-10610346970"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-primary-700"
              >
                CQC Registration Information
              </a>
            </li>
            <li>
              <a
                href="https://www.cqc.org.uk/location/1-11688271981"
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
