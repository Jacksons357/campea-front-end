import { z } from 'zod'

export const formSchema = z.object({
  userId: z.string().optional(),
  product: z.string().optional(),
  code: z
    .string()
    .min(2, { message: 'O código deve ter pelo menos 2 caracteres.' })
    .max(14, { message: 'O código deve ter no máximo 14 caracteres.' }),
  quantity: z.string().min(1, { message: 'Deve informar a quantidade' }),
  lote: z.string().optional(),
  validate: z.string().optional(),
  destination: z
    .string()
    .min(1, { message: 'Deve informar o número da loja de destino' }),
})

export const formUserSchema = z.object({
  username: z.string().min(1, { message: 'Deve informar o usuário' }),
  password: z.string().min(1, { message: 'Deve inserir no mínimo 1 caracter' }),
})
