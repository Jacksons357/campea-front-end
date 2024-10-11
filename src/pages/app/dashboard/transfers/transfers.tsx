import { DataTable } from '@/components/data-table'
import { useTransfers } from '@/hooks/useTransfers'
import { Helmet } from 'react-helmet-async'
import { TableColumns } from './table-columns'

export function Transfers() {
  const { transfers, isLoading, error } = useTransfers()

  if (isLoading) return <div>Carregando transferências...</div>
  if (error) return <div>{error.message}</div>

  return (
    <div>
      <Helmet title="Transferências" />
      <h1>Transferências</h1>
      <div className="container mx-auto py-10">
        <DataTable columns={TableColumns} data={transfers} />
      </div>
    </div>
  )
}
