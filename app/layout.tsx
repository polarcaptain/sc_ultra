import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LayoutClient from './LayoutClient'

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
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
