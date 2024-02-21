import { currentProfile, db } from '@/utils'
import { MemberRole } from '@prisma/client'
import { NextResponse } from 'next/server'
import { v4 } from 'uuid'


export async function POST (req: Request) {
  try {
    const { name, imageUrl } = await req.json()
    const profile = await currentProfile()

    if (!profile) return new NextResponse('Unauthorized', { status: 401 })

    const server = await db.server.create({
      data: {
        profileId: profile.id,
        name,
        imageUrl,
        inviteCode: v4(),
        channels: {
          create: [
            { name: 'general', profileId: profile.id }
          ]
        },
        members: {
          create: [
            { profileId: profile.id, role: MemberRole.ADMIN }
          ]
        }
      }
    })

    return NextResponse.json(server)

  } catch (error) {
    console.error("SERVERS_POST", error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}