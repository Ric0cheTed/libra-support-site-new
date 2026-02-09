'use client'

import Link from 'next/link'
import Image from "next/image";
import { usePathname } from 'next/navigation'
import { navItems } from '@/lib/nav'

export function Sidebar({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean
  toggleSidebar: () => void
}) {
  const pathname = usePathname()

  return (
    <aside
      className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
      `}
    >
      {/* Sidebar Content */}
      <div className="h-full flex flex-col p-6">
        <div className="mb-8 flex justify-center">
          <Link href="/" onClick={toggleSidebar}>
            <Image
			  src="/images/libra-full-logo.webp"
			  alt="Libra Support Services"
			  width={160}
			  height={40}
			/>
          </Link>
        </div>

        <nav className="flex-1 space-y-4">
          {navItems.map((item) => (
            <div key={item.title}>
              <Link
                href={item.href}
                className={`block px-2 py-1 rounded ${
                  pathname === item.href
                    ? 'bg-blue-100 text-blue-700 font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={toggleSidebar}
              >
                {item.title}
              </Link>

              {/* Render sub-items if any */}
              {item.subItems && pathname.startsWith(item.href) && (
                <div className="pl-4 mt-2 space-y-2">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className={`block text-sm px-2 py-1 rounded ${
                        pathname === subItem.href
                          ? 'bg-blue-50 text-blue-700 font-semibold'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                      onClick={toggleSidebar}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}
