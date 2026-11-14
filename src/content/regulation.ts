// Official CQC location records checked on 8 November 2026.
// Keep ratings branch-specific; update from the official record before a release.
export const regulation = {
  checkedOn: "8 November 2026",
  todmorden: {
    name: "Libra Support Services — Todmorden",
    rating: "Good",
    url: "https://www.cqc.org.uk/location/1-11688271981",
    reportUrl: "https://www.cqc.org.uk/location/1-11688271981/reports/AP8103/overall",
    reportPublished: "7 January 2025",
    assessmentPeriod: "18–27 November 2024",
    questions: ["Safe", "Effective", "Caring", "Responsive", "Well-led"],
  },
  burnley: {
    name: "Libra Support Services Ltd — Burnley",
    rating: null,
    status: "Not inspected yet",
    registeredOn: "9 July 2026",
    url: "https://www.cqc.org.uk/location/1-28811023836",
  },
} as const;
