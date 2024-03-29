"use client"

import { LuPlus } from 'react-icons/lu'
import ActionTooltip from '../ActionTooltip'

const NavigationAction = () => {
  return (
    <div>
      <ActionTooltip
      side='right'
      align='center'
      label='Add a Server'
      >
        <button className="group flex items-center">
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
            <LuPlus size={25} className="group-hover:text-white transition text-emerald-500" />
          </div>
        </button>
      </ActionTooltip>
    </div>
  )
}

export default NavigationAction