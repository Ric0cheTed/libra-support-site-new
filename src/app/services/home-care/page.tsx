import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export const metadata = {
  title: "Home Care Services | Libra Support Services",
  description: "Flexible and compassionate in-home care services tailored to your family's needs in Todmorden and West Yorkshire.",
}

export default function HomeCarePage() {
  return (
    <>
      <Breadcrumbs />

      <div className="space-y-10 max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-4">Home Care Services</h1>
        <p className="text-lg text-gray-600">
          Flexible, personalized home care to support daily living and independence, provided by compassionate carers.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Help with bathing, dressing, mobility, and hygiene</li>
            <li>Household chores, medication support, and meals</li>
            <li>Friendly companionship and wellness checks</li>
          </ul>
        </section>

        <TestimonialsSection />
      </div>
    </>
  )
}