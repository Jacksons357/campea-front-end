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
  const response = await axios.post(`${env.TRANSFERS_URL}/transfers`, values)

  return response.data
}

export async function updateTransferStatus(
  id: string,
  status: 'pending' | 'sent'
) {
  const response = await axios.patch(`${env.TRANSFERS_URL}/transfer/${id}`, {
    status,
  })

  return response.data
}

export async function deleteTransfer(id: string): Promise<void> {
  await axios.delete(`${env.TRANSFERS_URL}/transfer/${id}`)
}
