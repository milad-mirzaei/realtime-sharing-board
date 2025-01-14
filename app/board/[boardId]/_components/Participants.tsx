'use client'

import { useOthers, useSelf } from "@/liveblocks.config";
import React from "react";
import UserAvatar from "./UserAvatar";
import { connectionIdToColor } from "@/lib/utils";

const MAX_SHOWN_USERS = 2

const Participants = () => {

    const users = useOthers()
    const currentUser = useSelf()
    const hasMoreUser = users.length > MAX_SHOWN_USERS

  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md ">
      <div className="flex gap-x-2" >
        {
            users.slice(0,MAX_SHOWN_USERS)
            .map(({connectionId, info})=>{
                return (
                    <UserAvatar
                    borderColor={connectionIdToColor(currentUser.connectionId)}
                    key={connectionId}
                    src={info?.picture}
                    name={info?.name}
                    fallback={info?.name?.[0] || 'T' }
                    />
                )
            })
        }
        {
            currentUser && (
                <UserAvatar
                borderColor={connectionIdToColor(currentUser.connectionId)}  
                src={currentUser.info?.picture}
                name={currentUser.info?.name}
                fallback={currentUser.info?.name?.[0]}
                />
            )
        }
        {
            hasMoreUser && (
                <UserAvatar
                borderColor={connectionIdToColor(currentUser.connectionId)}
                name={`${users.length - MAX_SHOWN_USERS} more`}
                fallback={`+${users.length - MAX_SHOWN_USERS }`}
                />
            )
        }


      </div>
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]" />
  );
};

export default Participants;
