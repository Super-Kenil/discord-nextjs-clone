'use client'
import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import axios from 'axios'

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/ui'
import { FileUpload } from '@/components'
import { useRouter } from 'next/navigation'
import { onSubmit } from './initial-modal-action'

export const newServerSchema = z.object({
  name: z.string().min(2, { message: 'Server name is required' }),
  imageUrl: z.string().min(2, { message: 'Server image is required' }),
})

const InitialModal = () => {

  const router = useRouter()
  const [isMounded, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])



  const form = useForm({
    defaultValues: {
      name: '',
      imageUrl: '',
    },
    resolver: zodResolver(newServerSchema),
  })

  const isLoading = form.formState.isSubmitting

  // const handleServerSubmit = async (values: z.infer<typeof newServerSchema>) => {
  //   Promise.all([onSubmit(values)]).then(() => {
  //     form.reset()
  //     router.refresh()
  //   })
  // }

  // const onSubmit = async (values: z.infer<typeof newServerSchema>) => {
  //   "use server"
  //   try {
  //     const response = await fetch('/api/servers', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: await JSON.stringify(values)
  //     })
  //     console.log('response after submission', response)
  //     form.reset()
  //     router.refresh()
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  const onSubmit = async (values: z.infer<typeof newServerSchema>) => {
    try {
      const response = await fetch('/api/servers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: await JSON.stringify(values)
      })
      console.log('response after submission', response)
      form.reset()
      router.refresh()
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  // await axios.post('/api/servers', values)
  if (!isMounded) return null

  return (
    <Dialog open>
      <DialogContent className="overflow-hidden bg-white p-0 text-black">
        <DialogHeader className="px-6 pt-8">
          <DialogTitle className="text-2-xl text-center font-bold">
            Customize your server
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Give your server a personality with a name and an image. You can
            always change it in the future.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">
              <div className="flex items-center justify-center text-center">
                <FormField
                  control={form.control}
                  name='imageUrl'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FileUpload
                          endPoint="serverImage"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Server Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="border-0 bg-zinc-300/50 text-black focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder='Enter server name'
                        autoFocus
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className='bg-gray-100 px-6 py-4'>
              <Button disabled={isLoading} variant='primary'>
                Create
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default InitialModal
