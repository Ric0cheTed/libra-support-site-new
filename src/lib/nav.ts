export const navItems = [
  { title: "Home", href: "/" },
  {
    title: "Services",
    href: "/services",
    subItems: [
      { title: "Home Care", href: "/services/home-care" },
      { title: "Live-in Care", href: "/services/live-in-care" },
      { title: "Respite Care", href: "/services/respite-care" },
    ],
  },
  { title: "Care Fees", href: "/care-fees" },
  {
    title: "About",
    href: "/about",
    subItems: [
      { title: "Meet the Team", href: "/about/team" }, // 👈 ADD THIS
    ],
  },
  { title: "Contact", href: "/contact" },
  { title: "Careers", href: "/careers" },
];
