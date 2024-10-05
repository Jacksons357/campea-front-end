import { z } from 'zod'

export const transferSchema = z.object({
  product: z.string().optional(),
  code: z.string(),
  quantity: z.string(),
  lote: z.string().optional(),
  validate: z.string().optional(),
  destination: z.string(),
  status: z.literal('pending'),
})
