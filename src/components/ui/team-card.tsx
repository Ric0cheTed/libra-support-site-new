import Image from "next/image";
import { UserRound } from "lucide-react";
import { getPublicStaff } from "@/content/people";
import { guidanceSources } from "@/content/guidance-sources";

// Accept only a catalogue ID, never caller-supplied identity or approval flags.
// This server component consumes the same public projection as every directory.
export default function TeamCard({ staffId }: { staffId: string }) {
  const person = getPublicStaff().find(profile => profile.id === staffId);
  if (!person) return null;
  const source = guidanceSources[person.sourceKey];

  return (
    <article className="libra-card">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-800">
        {person.image ? <Image src={person.image.src} alt={person.image.alt} width={64} height={64} className="h-16 w-16 rounded-full object-cover" /> : <UserRound className="h-7 w-7" aria-hidden="true" />}
      </div>
      <h3 className="text-xl font-semibold text-primary-900">{person.name}</h3>
      <p className="mt-3 leading-7 text-slate-700">{person.role}</p>
      {person.bio && <p className="mt-4 leading-8 text-slate-700">{person.bio}</p>}
      <a href={source.url} className="libra-link mt-3 text-sm">Professional role on CQC: {person.name}</a>
      <p className="mt-1 text-xs leading-6 text-slate-600">Role source checked <time dateTime={person.verifiedOn}>{person.verifiedOn}</time></p>
    </article>
  );
}