import { ConvexHttpClient } from "convex/browser";
import {Liveblocks} from '@liveblocks/node'
import {auth, currentUser} from '@clerk/nextjs'
import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

const liveblocks = new Liveblocks({
    secret:'sk_dev_K-MpTC071QmjYM26WNeWOXBPHv6DIHJAsCVGZpWnqJShRN2gr7seKgxy-s-sv2oQ'
})

export const POST = async (request : Request)=>{
    const authorization = await auth()
    const user = await currentUser()

    if(!authorization || !user){
        return new Response('Unauthorized',{status:403})
    }

    const {room} = await request.json()
    const board = await convex.query(api.board.get,{id:room})

    if(board?.orgId !== authorization.orgId){
        return new Response('Unauthorized',{status:403})
    }

    const userInfo = {
        name: user.firstName || 'Teammate',
        picture : user.imageUrl
    }

    const session = liveblocks.prepareSession(
        user.id,{userInfo}
    )

    if(room){
        session.allow(room,session.FULL_ACCESS)
    }

    const {status,body} = await session.authorize()

    return new Response(body,{status})





}