"use server"

import * as z from 'zod'
import axios from 'axios'
import type { newServerSchema } from './InitialModal'

export const onSubmit = async (values: z.infer<typeof newServerSchema>) => {
  try {
    // const response = await fetch('/api/servers', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: await JSON.stringify(values)
    // })
    const response = await axios.post('/api/servers', values)

    console.log('response after submission', response)
  } catch (error) {
    console.error(error)
  }
}