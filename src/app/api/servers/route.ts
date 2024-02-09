import { NextResponse } from 'next/server'


export const POST = async (req: Request) => {
  try {

  } catch (error) {
    console.error("SERVERS_POST", error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}