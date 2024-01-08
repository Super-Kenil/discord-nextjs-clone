import { redirect } from 'next/navigation'
import { InitialModal } from '@/components/modals'
import { getInitialProfile } from '@/helpers'
import { db } from '@/utils'

const Home = async () => {
  const profile = await getInitialProfile()

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  })

  if (server) return redirect(`/servers/${server.id}`)

  return <InitialModal />
}

export default Home
