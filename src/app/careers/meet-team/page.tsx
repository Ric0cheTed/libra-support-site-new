import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata = {
  title: "Meet the Team | Libra Support Services",
  description: "Get to know the compassionate carers and management team behind Libra Support Services.",
}

export default function MeetTeamPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="space-y-6">
        <h1 className="text-3xl font-bold mb-4">Meet Our Team</h1>
        <p className="text-gray-600">
          Our team is made up of experienced carers, nurses, and managers all dedicated to delivering the highest quality of care.
        </p>
      </div>
    </>
  )
}