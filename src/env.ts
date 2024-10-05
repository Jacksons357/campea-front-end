import { z } from 'zod'

const envSchema = z.object({
  TRANSFERS_URL: z.string().url(),
  SEARCH_CODE: z.string(),
})

export const env = envSchema.parse({
  TRANSFERS_URL: import.meta.env.VITE_TRANSFERS_URL,
  SEARCH_CODE: import.meta.env.VITE_SEARCH_CODE,
})
