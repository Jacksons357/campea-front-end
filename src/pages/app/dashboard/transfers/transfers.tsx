import { DataTable } from '@/components/data-table'
import { useTransfers } from '@/hooks/useTransfers'
import { Helmet } from 'react-helmet-async'
import { TableColumns } from './table-columns'
import { HeaderTransfer } from '@/components/header-transfer'

export function Transfers() {
  const { transfers, isLoading, error } = useTransfers()

  if (isLoading) return <div>Carregando transferências...</div>
  if (error) return <div>{error.message}</div>

  return (
    <div>
      <Helmet title="Transferências" />
      <HeaderTransfer />
      <div className="container mx-auto py-10">
        <DataTable columns={TableColumns} data={transfers} />
      </div>
    </div>
  )
}
