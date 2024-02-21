"use client"

import type { ReactNode } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import type { Side, Align } from '@radix-ui/react-popper'

type ActionTooltipProps = {
  label: string
  children: ReactNode
  side?: Side
  align?: Align
}

const ActionTooltip = ({ children, label, align, side }: ActionTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <p className='font-semibold text-sm capitalize'>
            {label.toLowerCase()}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default ActionTooltip