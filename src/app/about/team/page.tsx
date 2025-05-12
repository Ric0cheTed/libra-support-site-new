import { metadata as teamMetadata } from "./metadata";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import TeamContent from "./team-content";

export const metadata = teamMetadata;

export default function TeamPage() {
  return (
    <>
      <Breadcrumbs />
      <TeamContent />
    </>
  );
}
