import { FormNewTransfer } from '@/components/form-new-transfer'
import { getUsers } from '@/lib/transfers'
import { Helmet } from 'react-helmet-async'

export function Dashboard() {
  getUsers()
  return (
    <>
      <Helmet title="Nova transferência" />
      <div className="">
        <h1 className="text-2xl">Adicionar uma nova transferencia</h1>
        <FormNewTransfer />
      </div>
    </>
  )
}
