import { type ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center">
      {children}
    </div>
  )
}

export default Layout