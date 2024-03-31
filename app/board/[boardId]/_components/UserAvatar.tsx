import Hint from '@/components/Hint'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

interface UserAvatarProps {
    src?:string,
    name?:string,
    fallback?:string,
    borderColor?:string,
}

const UserAvatar = ({borderColor,fallback,name,src}:UserAvatarProps) => {
  return (
    <Hint label={name || 'Teammate'} side='bottom' sideOffset={18} >
        <Avatar
        className='h-8 w-8 border-2'
        style={{borderColor}}
        >
            <AvatarImage src={src} />
            <AvatarFallback className='text-xs font-semibold' >
                {fallback}
            </AvatarFallback>
        </Avatar>
    </Hint>
  )
}

export default UserAvatar