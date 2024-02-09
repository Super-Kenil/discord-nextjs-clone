"use client"

import type { OurFileRouter } from '@/app/api/uploadthing/core'
import { UploadDropzone } from '@/utils/uploadthing'
import Image from 'next/image'
import { LuX } from 'react-icons/lu'

import '@uploadthing/react/styles.css'

type FileUploadProps = {
  onChange: (url?: string) => void
  value: string
  endPoint: keyof OurFileRouter
}

const FileUpload = ({ endPoint, onChange, value }: FileUploadProps) => {

  const fileType = value.split('.').pop()
  if (value && fileType !== 'pdf') {
    return (
      <div className='relative size-32'>
        <Image src={value} alt='server-img' sizes='128px' className='rounded-full' fill />
        <button onClick={() => onChange('')} className='bg-rose-500 text-white p-1 rounded-full absolute right-2 top-2 shadow-sm' type='button'><LuX /></button>
      </div>
    )
  }

  return (
    <UploadDropzone
      endpoint='serverImage'
      className=' border-solid border-slate-300'
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url)
      }}
      onUploadError={((error: Error) => {
        console.error("Error uploading file", error)
      })}
    />
  )
}

export default FileUpload