'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Breadcrumbs() {
  const pathname = usePathname()

  const segments = pathname.split("/").filter((seg) => seg.length > 0)

  return (
    <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <ol className="flex flex-wrap space-x-1">
        <li>
          <Link href="/" className="hover:underline text-primary">
            Home
          </Link>
        </li>

        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/")

          return (
            <li key={index} className="flex items-center space-x-1">
              <span>/</span>
              <Link href={href} className="hover:underline text-primary capitalize">
                {segment.replaceAll("-", " ")}
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}