import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { type ReactNode } from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import NextTopLoader from 'nextjs-toploader'

import './globals.css'
import { ThemeProvider } from '@/components'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord',
  description: 'Discord Clone creted with Nextjs, Typescript, shadcn, tailwindcss, Socket.io, Prisma, MySQL',
  authors: [{
    name: 'Super-Kenil',
    url: 'https://github.com/Super-Kenil/'
  }],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={open_sans.className}>
          <NextTopLoader showSpinner={false} />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
