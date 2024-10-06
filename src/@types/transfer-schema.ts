import { z } from 'zod'

export const transferSchema = z.object({
  id: z.string().cuid(),
  product: z.string().optional(),
  code: z.string(),
  quantity: z.string(),
  lote: z.string().optional(),
  validate: z.string().optional(),
  destination: z.string(),
  status: z.union([z.literal('pending'), z.literal('sent')]),
})
