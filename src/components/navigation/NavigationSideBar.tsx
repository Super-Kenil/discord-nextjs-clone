import { currentProfile, db } from '@/utils'
import { redirect } from 'next/navigation'
import NavigationAction from './NavigationAction'
import NavigationItem from './NavigationItem'
import ModeToggle from '../ModeToggle'
import { ScrollArea, Separator } from '../ui'
import { UserButton } from '@clerk/nextjs'

const NavigationSideBar = async () => {
  const profile = await currentProfile()

  if (!profile) {
    return redirect('/')
  }

  const servers = await db.server.findMany({
    where: { members: { some: { profileId: profile.id } } }
  })

  return (
    <div className='space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3'>
      <NavigationAction />
      <Separator className='h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto' />
      <ScrollArea className='flex-1 w-full'>

        {servers.map((server) => (
          <div key={server.id} className="mb-4">
            <NavigationItem {...server} />
          </div>
        ))}

      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <ModeToggle />
        <UserButton
          afterSignOutUrl='/'
          appearance={{
            elements: {
              avatarBox: 'size-12'
            }
          }}
        />
      </div>
    </div>
  )
}

export default NavigationSideBar