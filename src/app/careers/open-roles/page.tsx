import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata = {
  title: "Careers and Open Roles | Libra Support Services",
  description: "View available job opportunities and join our growing team of care professionals.",
}

export default function OpenRolesPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="space-y-6">
        <h1 className="text-3xl font-bold mb-4">Join Our Team</h1>
        <p className="text-gray-600">
          We’re looking for compassionate carers! Check out our available positions and apply today to make a difference.
        </p>
      </div>
    </>
  )
}