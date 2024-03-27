import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { OrganizationProfile } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import React from 'react'

const InviteButton = () => {
  return (
    <Dialog>
        <DialogTrigger asChild >
            <Button variant='outline' >
                <Plus className='h-4 w-4 mr-2' />
                Invite members
            </Button>
        </DialogTrigger>
        <DialogContent className='flex justify-center items-center w-full max-w-[880px] bg-transparent border-none p-0'>
            <OrganizationProfile/>
        </DialogContent>
    </Dialog>
  )
}

export default InviteButton