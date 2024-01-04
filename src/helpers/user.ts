import { db } from "@/utils"
import { currentUser, redirectToSignIn } from "@clerk/nextjs"

export const getInitialProfile = async () => {
  const user = await currentUser()

  if (!user) return redirectToSignIn()

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id
    }
  })

  if (profile) return profile

  console.log('user',user);

  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress
    }
  })

  return newProfile
}