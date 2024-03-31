'use client'

import { RoomProvider } from '@/liveblocks.config'
import { Layer } from '@/types/canvas'
import { LiveMap, LiveObject,LiveList } from '@liveblocks/client'
import { ClientSideSuspense } from '@liveblocks/react'
import React from 'react'

interface RoomProps {
    children:React.ReactNode,
    roomId:string,
    fallback:NonNullable<React.ReactNode> | null
}

const Room = ({children,roomId,fallback}:RoomProps) => {
  return (
   <RoomProvider
    id={roomId}
     initialPresence={{ cursor:null,selection:[]}}
     initialStorage={{
        layers: new LiveMap<string , LiveObject<Layer>>(),
        layerIds:new LiveList()
     }}
     >

        <ClientSideSuspense fallback={ fallback } >
            {()=>children}
        </ClientSideSuspense>
   </RoomProvider>
  )
}

export default Room