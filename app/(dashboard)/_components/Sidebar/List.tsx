'use client'

import { useOrganizationList } from '@clerk/nextjs'
import Item from './Item';

const List = () => {

    const {userMemberships} = useOrganizationList({
        userMemberships:{
            infinite:true
        }
    })


    if(!userMemberships.data?.length) return null;

  return (
    <ul className='space-y-4' >
        {
            userMemberships.data?.map((mem)=>(
                <Item
                id={mem.organization.id}
                imageUrl={mem.organization.imageUrl}
                name={mem.organization.name}
                key={mem.organization.id}
                />
            ))
        }

    </ul>
  )
}

export default List