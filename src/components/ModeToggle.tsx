"use client"
import { LuMoon, LuSun } from 'react-icons/lu'
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui'
import { useTheme } from 'next-themes'

const ModeToggle = () => {

  const { setTheme } = useTheme()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className='bg-transparent border-0' variant='outline' size='icon'>
            <LuSun className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' size={19} />
            <LuMoon className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' size={19} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem onClick={() => setTheme('light')}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default ModeToggle