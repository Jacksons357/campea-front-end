import { Helmet } from 'react-helmet-async'

export function Dashboard() {
  return (
    <>
      <Helmet title="Nova transferência" />
      <div className="">
        <h1 className="text-2xl">Adicionar nova transferencia</h1>
      </div>
    </>
  )
}
