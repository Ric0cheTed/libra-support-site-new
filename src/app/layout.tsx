'use client'

import '@/styles/globals.css'
import { Sidebar } from '@/components/layout/sidebar'
import { Footer } from '@/components/layout/footer' // ✅ Add Footer import
import { useState } from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        
        {/* Mobile Hamburger */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-4 z-50 p-2 rounded bg-white shadow-md md:hidden"
        >
          ☰
        </button>

        <div className="flex flex-1">
          {/* Sidebar */}
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

          {/* Main content */}
          <main className="flex-1 p-6 bg-gray-50">{children}</main>
        </div>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  )
}
