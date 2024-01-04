"use client"
import { type ReactNode } from "react"
import ThemeProvider from "./ThemeProvider"

const ClientSideProviders = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <ThemeProvider
      attribute="class"
      // defaultTheme="dark"
      // forcedTheme="dark"
      // storageKey="discord-theme-mode"
      // enableSystem
      // disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

export default ClientSideProviders