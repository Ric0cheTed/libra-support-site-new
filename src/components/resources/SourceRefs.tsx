import Link from "next/link";
import { guidanceSources } from "@/content/guidance-sources";

export function SourceRefs({ sourceKeys, external = false }: { sourceKeys: string[]; external?: boolean }) {
  return <span className="inline-flex flex-wrap gap-2 text-sm">{sourceKeys.map(key => <a key={key} href={external ? guidanceSources[key].url : `#source-${guidanceSources[key].id}`} className="inline-flex min-h-8 items-center px-1 font-medium text-primary-800 underline underline-offset-4" aria-label={`[${guidanceSources[key].id}] ${guidanceSources[key].title}`}>[{guidanceSources[key].id}]</a>)}</span>;
}

export function GuideLink({ slug, title }: { slug: string; title: string }) {
  return <Link href={`/resources/${slug}`} className="libra-link">{title}</Link>;
}
