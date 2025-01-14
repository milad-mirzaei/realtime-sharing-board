'use client'

import Hint from '@/components/Hint'
import { Button } from '@/components/ui/button'
import { icons, LucideIcon } from 'lucide-react'
import React from 'react'

interface ToolButtonProps {
    label:string,
    icon:LucideIcon,
    onClick:()=>void,
    isActive?: boolean,
    isDisabled?:boolean
}

const ToolButton = ({
    icon:Icon,label,onClick,isActive,isDisabled
}:ToolButtonProps) => {
  return (
    <Hint label={label} side='right' sideOffset={14} >
        <Button
        disabled={isDisabled}
        onClick={onClick}
        size='icon'
        variant={isActive ? 'boardActive' : 'board'}
        >
            <Icon/>
        </Button>
    </Hint>
  )
}

export default ToolButton