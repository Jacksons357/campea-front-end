import { formUserSchema } from '@/@types/form-schema'
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
import { loginUser } from '@/lib/login'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import type { z } from 'zod'

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

export function SignIn() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      navigate('/dashboard')
    }
  }, [navigate])

  const form = useForm<z.infer<typeof formUserSchema>>({
    resolver: zodResolver(formUserSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const mutation = useMutation(loginUser, {
    onSuccess: data => {
      localStorage.setItem('token', data)
      navigate('/dashboard')
    },
    onError: error => {
      console.error('Login failed: ', error)
      console.error('login failed', error)
    },
  })

  function onSubmit(values: z.infer<typeof formUserSchema>) {
    mutation.mutate(values)
  }

  return (
    <>
      <Helmet title="Login lojista" />
      <div className="flex justify-center items-center h-screen">
        <div>
          <Form {...form}>
            <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
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
              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  )
}
