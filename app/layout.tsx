import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import TestSidebar from '@/components/TestSidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SC Ultra - Advanced IQ Test',
  description: 'Challenge your intelligence with SC Ultra, a sophisticated IQ assessment platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <div className="flex">
          <TestSidebar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
