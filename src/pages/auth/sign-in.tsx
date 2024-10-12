import { FormSignIn } from '@/components/form-sign-in'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import logo from '../../../public/logocampea.png'

export function SignIn() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      navigate('/dashboard/transfers')
    }
  }, [navigate])

  return (
    <>
      <Helmet title="Login lojista" />
      <div className="grid grid-cols-3 m-auto h-screen w-full items-center pt-16">
        <div className="col-span-2 h-full items-center flex justify-center bg-muted-foreground/40">
          <img src={logo} alt="logo drogarias campea" className="w-[350px]" />
        </div>
        <div className="border-l pl-8 h-full flex items-center justify-center bg-muted-foreground">
          <FormSignIn />
        </div>
      </div>
    </>
  )
}
