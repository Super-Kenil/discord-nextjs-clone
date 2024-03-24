"use client"

import { useParams, useRouter } from 'next/navigation'
import ActionTooltip from '../ActionTooltip'
import { cn } from '@/utils'
import Image from 'next/image'

type NavigationItemProps = {
  id: string
  imageUrl: string
  name: string
}

const NavigationItem = ({ id, imageUrl, name }: NavigationItemProps) => {

  const router = useRouter()
  const params = useParams()

  const handleNavigateToServer = () => {
    router.push(`/servers/${id}`)
  }

  return (
    <ActionTooltip
      side='right'
      align='center'
      label={name}
    >
      <button
        onClick={handleNavigateToServer}
        className='group relative flex items-center'
      >
        <div
          className={cn('absolute start-0 bg-primary rounded-e-full transition-all w-1',
            { 'group-hover:h-5': params.serverId !== id },
            params.serverId === id ? 'h-9' : 'h-2'
          )}
        />

        <div
          className={cn('relative group flex mx-3 h-12 w-12 rounded-3xl group-hover:rounded-2xl transition-all overflow-hidden',
            { 'bg-primary/10 text-primary rounded-2xl': params.serverId === id }
          )}>
          <Image
            fill
            src={imageUrl}
            alt='Channel'
          />
        </div>

      </button>
    </ActionTooltip>
  )
}

export default NavigationItem