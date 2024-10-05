import type { formSchema } from '@/@types/form-schema'
import { transferSchema } from '@/@types/transfer-schema'
import { env } from '@/env'
import axios from 'axios'
import type { z } from 'zod'

type Transfer = z.infer<typeof transferSchema>

export async function getTransfers(): Promise<Transfer[]> {
  const response = await axios.get(env.TRANSFERS_URL)

  return transferSchema.array().parse(response.data.transfers)
}

export async function newTransfer(values: z.infer<typeof formSchema>) {
  console.log('values: ', values)
  console.log('Transfer URL:', env.TRANSFERS_URL)
  const response = await axios.post(`${env.TRANSFERS_URL}/transfers`, values)

  return response.data
}
