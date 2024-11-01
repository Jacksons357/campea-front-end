import { z } from 'zod'

export const transferSchema = z.object({
  createdAt: z.union([z.string(), z.date()]).optional(),
  id: z.string().cuid(),
  product: z.string().optional().nullable(),
  code: z.string(),
  quantity: z.string(),
  lote: z.string().optional(),
  validate: z.string().optional(),
  destination: z.string(),
  status: z.union([z.literal('pending'), z.literal('sent')]),
})
