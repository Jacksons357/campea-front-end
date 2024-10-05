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
import { useMutation } from 'react-query'
import { newTransfer } from '@/lib/transfers'
import { useState } from 'react'
import { searchCode } from '@/lib/search-code'

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
    description: 'Digite o nome do produto',
  },
  { name: 'quantity', label: 'Quantidade', description: 'Digite a quantidade' },
  { name: 'lote', label: 'Lote', description: 'Digite o lote' },
  { name: 'validate', label: 'Validade', description: 'Digite a validade' },
  { name: 'destination', label: 'Destino', description: 'Digite o destino' },
]

export function FormNewTransfer() {
  const [productName, setProductName] = useState('')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: '',
      quantity: '',
      lote: '',
      validate: '',
      destination: '',
      product: '',
    },
  })

  async function handleCodeChange(value: string) {
    if (value) {
      const product = await searchCode(value)
      setProductName(product)
      form.setValue('product', product)
    }

    setProductName('')
    form.setValue('product', '')
  }

  const mutation = useMutation(newTransfer, {
    onSuccess: () => {
      console.log('transferencia realizada')
      // form.reset()
      setProductName('')
    },
    onError: error => {
      console.error('Erro ao criar transferencia: ', error)
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('submiting values: ', values)
    mutation.mutate(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[300px]">
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
                    // disabled={name === 'product' ? true : false}
                    {...field}
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
        <Button type="submit">Enviar transferência</Button>
      </form>
    </Form>
  )
}
