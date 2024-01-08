import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { type ReactNode } from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import NextTopLoader from 'nextjs-toploader'
import { ClientSideProviders } from '@/components'

import './globals.css'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord',
  description:
    'Discord Clone creted with Nextjs, Typescript, shadcn, tailwindcss, Socket.io, Prisma, MySQL',
  authors: [
    {
      name: 'Super-Kenil',
      url: 'https://github.com/Super-Kenil/',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={open_sans.className}>
          <ClientSideProviders>
            <NextTopLoader showSpinner={false} />
            {children}
          </ClientSideProviders>
        </body>
      </html>
    </ClerkProvider>
  )
}
