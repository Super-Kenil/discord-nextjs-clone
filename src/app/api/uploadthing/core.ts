import { auth } from '@clerk/nextjs'
import { createUploadthing, type FileRouter } from "uploadthing/next"
import { UploadThingError } from "uploadthing/server"

const f = createUploadthing()

const getAuthUser = () => {
  const { userId } = auth()
  if (!userId) throw new UploadThingError("Unauthorized")
  return { userId }
}

export const ourFileRouter = {
  serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => getAuthUser())
    .onUploadComplete(() => { }),

  messageFile: f(['image', 'pdf'])
    .middleware(() => getAuthUser())
    .onUploadComplete(() => { }),

} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter