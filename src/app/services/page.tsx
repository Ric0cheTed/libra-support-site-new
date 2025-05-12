import { metadata as servicesMetadata } from "./metadata";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import ServicesContent from "./services-content";

export const metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs />
      <ServicesContent />
    </>
  );
}
