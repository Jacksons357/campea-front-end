import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import type { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { formUserSchema } from '@/@types/form-schema'

import { loginUser } from '@/lib/login'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

type fieldType = 'username' | 'password'

const fields: { name: fieldType; label: string; description: string }[] = [
  {
    name: 'username',
    label: 'Usuário',
    description: 'Informe usuário logista',
  },
  {
    name: 'password',
    label: 'Senha',
    description: 'Informe a senha logista',
  },
]

export function FormSignIn() {
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof formUserSchema>>({
    resolver: zodResolver(formUserSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const mutation = useMutation(loginUser, {
    onMutate: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
    },
    onSuccess: data => {
      localStorage.setItem('token', data)
      navigate('/dashboard/transfers')
    },
    onError: error => {
      form.reset()
      toast('Dados inválidos!', {
        style: {
          color: 'red',
        },
      })
      console.error(error)
    },
  })

  async function onSubmit(values: z.infer<typeof formUserSchema>) {
    mutation.mutate(values)
  }
  return (
    <div className="bg-primary-foreground p-10 rounded-xl">
      <Form {...form}>
        <form className="space-y-4 " onSubmit={form.handleSubmit(onSubmit)}>
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
                      placeholder={description}
                      type={name === 'password' ? 'password' : 'text'}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="submit"
            className="w-full"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? 'Validando dados' : 'Entrar'}
          </Button>
        </form>
      </Form>
    </div>
  )
}
