'use client'

import React, { FormEventHandler, useEffect, useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { useRenameModal } from '@/store/useRenameModal'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { api } from '@/convex/_generated/api'
import { toast } from 'sonner'
import { useApiMutation } from '@/hooks/useApiMutation'

const RenameModal = () => {

    const {mutate,pending} = useApiMutation(api.board.update)

const {isOpen,onClose,initialValue} = useRenameModal()

const [title, setTitle] = useState(initialValue.title)

useEffect(()=>{
    setTitle(initialValue.title)
},[initialValue.title])

const onSubmit:FormEventHandler<HTMLFormElement> = (e)=>{
e.preventDefault()

mutate({
    id:initialValue.id,
    title
})
.then(()=>{toast.success('Board renamed');onClose()})
.catch(()=>toast.error('Failed to rename board'))

}

  return (
    <Dialog  open={isOpen} onOpenChange={onClose} >
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Edit board title
                </DialogTitle>
            </DialogHeader>
            <DialogDescription>
                Enter a new title for this board
            </DialogDescription>
            <form onSubmit={onSubmit} className='space-y-4' >
                <Input
                    disabled={pending}
                    required
                    maxLength={60}
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    placeholder='Board title'
                />
                <DialogFooter>
                    <DialogClose asChild >
                        <Button type='button' variant='outline' >
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button disabled={pending} type='submit' >
                        Save
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default RenameModal