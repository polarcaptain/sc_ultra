'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface TestSidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export default function TestSidebar({ isOpen = false, onClose }: TestSidebarProps) {
  const pathname = usePathname()

  const testLinks = [
    { href: '/vci', label: 'VCI', fullName: 'Verbal Comprehension Index', icon: 'dictionary' },
    { href: '/fri', label: 'FRI', fullName: 'Fluid Reasoning Index', icon: 'tactic' },
    { href: '/vsi', label: 'VSI', fullName: 'Visual Spatial Index', icon: 'deployed_code' },
    { href: '/qri', label: 'QRI', fullName: 'Quantitative Reasoning Index', icon: 'calculate' },
    { href: '/wmi', label: 'WMI', fullName: 'Working Memory Index', icon: 'history' },
    { href: '/psi', label: 'PSI', fullName: 'Processing Speed Index', icon: 'rocket_launch' },
  ]

  const handleLinkClick = () => {
    if (onClose) {
      onClose()
    }
  }

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      <aside className={`
        fixed md:sticky top-16 md:top-20 left-0 z-50
        w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-6 
        min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] overflow-y-auto scrollbar-thin
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="mb-6">
          <Link
            href="/indexer"
            onClick={handleLinkClick}
            className="flex items-center px-4 py-3 rounded-md bg-blue-600 dark:bg-blue-500 text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors mb-6"
          >
            <span className="material-symbols-outlined mr-2 text-lg">tune</span>
            <span>Indexer</span>
          </Link>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Take the Test</h2>
          <div className="h-1 w-12 bg-blue-600 dark:bg-blue-500"></div>
        </div>
        <nav className="space-y-1">
          {testLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white dark:bg-blue-500'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center">
                  <span className="material-symbols-outlined mr-2 text-lg">
                    {link.icon}
                  </span>
                  <div className="font-semibold">{link.label}</div>
                </div>
                <div className={`text-xs mt-1 ${isActive ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
                  {link.fullName}
                </div>
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
