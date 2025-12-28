'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import TestSidebar from '@/components/TestSidebar'

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <>
      <Navbar onMenuClick={toggleSidebar} />
      <div className="flex">
        <TestSidebar isOpen={sidebarOpen} onClose={closeSidebar} />
        <main className="flex-1 w-full md:w-auto">{children}</main>
      </div>
    </>
  )
}

