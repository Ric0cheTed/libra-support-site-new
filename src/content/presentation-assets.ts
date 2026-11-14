export type HeroPresentation = { src: string; alt: string; caption: string };

// Reviewed visually, not inferred from filenames. The legacy Burnley-named
// composite contains a Good badge and is not verified Burnley premises/rating
// evidence. Other legacy graphics include another provider's branding and a
// live-in-care label. Keep their original bytes, but do not render them here.
export function getHeroPresentation(legacySrc: string): HeroPresentation {
  if (legacySrc === "/images/about-team.webp") {
    return { src: legacySrc, alt: "Libra Support Services premises with green and orange storefront signage", caption: "Existing Libra premises image; not a staff portrait." };
  }
  return {
    src: "/images/hero.jpg",
    alt: "Illustrative care scene with two adults sharing a book",
    caption: "Illustrative care image, not a photograph of Libra staff or a person receiving Libra care.",
  };
}
