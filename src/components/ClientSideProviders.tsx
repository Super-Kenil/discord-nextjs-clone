"use client"
import { type ReactNode } from "react"

const ClientSideProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
    </>
  )
}

export default ClientSideProviders