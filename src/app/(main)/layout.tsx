import { NavigationSideBar } from '@/components'
import type { ReactNode } from 'react'

const MainLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-full'>
      <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">

        <NavigationSideBar />

      </div>
      <main className='md:ps-[72px] h-full'>
        {children}
      </main>
    </div>
  )
}

export default MainLayout