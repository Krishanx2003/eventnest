import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'
import { ThemeProvider } from '@/components/shared/theme-provider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'happen',
  description: 'Your Hub for Exciting Events!',
  icons: {
    icon: '/assets/images/logo.svg'
  }
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <body className={poppins.variable}>{children}</body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  )
}
