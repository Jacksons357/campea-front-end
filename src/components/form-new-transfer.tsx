import { formSchema } from '@/@types/form-schema'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useMutation, useQueryClient } from 'react-query'
import { newTransfer } from '@/lib/transfers'
import { useState } from 'react'
import { searchCode } from '@/lib/search-code'
import { toast } from 'sonner'

type FieldNames =
  | 'code'
  | 'quantity'
  | 'lote'
  | 'validate'
  | 'destination'
  | 'product'

const fields: { name: FieldNames; label: string; description: string }[] = [
  {
    name: 'code',
    label: 'Código do Produto',
    description: 'Digite o código do produto',
  },
  {
    name: 'product',
    label: 'Produto',
    description: 'Carregando...',
  },
  { name: 'quantity', label: 'Quantidade', description: 'Digite a quantidade' },
  { name: 'lote', label: 'Lote (opcional)', description: 'Digite o lote' },
  {
    name: 'validate',
    label: 'Validade (opcional)',
    description: 'Digite a validade',
  },
  { name: 'destination', label: 'Destino', description: 'Digite o destino' },
]

interface formProps {
  setOpenModal: (open: boolean) => void
}

export function FormNewTransfer({ setOpenModal }: formProps) {
  const [productName, setProductName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const queryClient = useQueryClient()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      code: '',
      quantity: '',
      lote: '',
      validate: '',
      destination: '',
      product: '',
    },
  })

  const mutation = useMutation(newTransfer, {
    onMutate: () => {
      setIsLoading(true)
    },
    onSuccess: async () => {
      await new Promise(resolve => setTimeout(resolve, 1500))

      form.reset()

      toast('Transferência criada com sucesso!')

      queryClient.invalidateQueries('transfers')

      setProductName('')
      setIsLoading(false)
      setOpenModal(false)
    },
    onError: error => {
      console.error('Erro ao criar transferencia: ', error)
      setIsLoading(false)
    },
  })

  async function handleCodeChange(value: string) {
    if (value) {
      const product = await searchCode(value)
      setProductName(product)
      form.setValue('product', product)
    } else {
      setProductName('')
      form.setValue('product', '')
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const transferData = {
      ...values,
    }

    setOpenModal(true)
    mutation.mutate(transferData)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[300px] space-y-4 mt-5"
      >
        {fields.map(({ name, label, description }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={name === 'product'}
                    placeholder={description}
                    onChange={e => {
                      field.onChange(e)
                      if (name === 'code') {
                        handleCodeChange(e.target.value)
                      }
                    }}
                    value={name === 'product' ? productName : field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button
          className="w-full"
          type="submit"
          disabled={!form.formState.isValid || isLoading}
        >
          {isLoading ? 'Enviando...' : 'Enviar Transferência'}
        </Button>
      </form>
    </Form>
  )
}
