import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata = {
  title: "Careers | Libra Support Services",
  description: "Join the Libra Support Services team and make a real difference in people's lives. View open roles and meet our compassionate team.",
}

export default function CareersPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="max-w-3xl mx-auto py-16 px-4 space-y-8 text-center">
        <h1 className="text-4xl font-bold">Careers at Libra Support Services</h1>
        <p className="text-gray-600 text-lg">
          We’re always looking for compassionate, professional carers to join our growing family.
          At Libra Support Services, you’ll make a real difference in the lives of families across West Yorkshire.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
          <a href="/careers/meet-team" className="px-6 py-3 bg-primary text-white rounded hover:bg-primary-dark">
            Meet Our Team
          </a>
          <a href="/careers/open-roles" className="px-6 py-3 border border-blue-600 text-primary rounded hover:bg-accent">
            View Open Roles
          </a>
        </div>
      </div>
    </>
  )
}
