import Link from 'next/link';

const CQC_LOCATION_ID = '1-11688271981';
const CQC_LOCATION_URL = `https://www.cqc.org.uk/location/${CQC_LOCATION_ID}`;

export default function CqcRatingCard() {
  return (
    <div className="w-full max-w-md border border-gray-200 rounded-xl bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div
          className="shrink-0 w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold"
          aria-hidden="true"
        >
          CQC
        </div>

        <div className="flex-1">
          <p className="text-sm text-gray-600">Care Quality Commission</p>
          <h3 className="text-lg font-semibold text-gray-900">Overall rating: Good</h3>
          <p className="text-sm text-gray-700 mt-1">
            View the official inspection report and rating details on the CQC website.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href={CQC_LOCATION_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              View CQC report
            </Link>
            <span className="text-xs text-gray-500 self-center">
              Opens in a new tab
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
