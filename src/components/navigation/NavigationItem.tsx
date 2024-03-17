"use client"

import { useRouter } from 'next/navigation'
import ActionTooltip from '../ActionTooltip'
import { cn } from '@/utils'

type NavigationItemProps = {
  id: string
  imageUrl: string
  name: string
}

const NavigationItem = ({ item }: { item: NavigationItemProps }) => {

  const { id, imageUrl, name } = item

  const router = useRouter()

  return (
    <ActionTooltip
      side='right'
      align='center'
      label={name}
    >
      <button
        onClick={() => { }}
        className='group relative flex items-center'
      >
        <div className={cn('absolute start-0 bg-primary rounded-e-full transition-all w-[4px]')}>

        </div>
      </button>
    </ActionTooltip>
  )
}

export default NavigationItem