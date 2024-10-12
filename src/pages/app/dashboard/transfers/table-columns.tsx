import type { transferSchema } from '@/@types/transfer-schema'
import type { ColumnDef } from '@tanstack/react-table'
import type { z } from 'zod'
import { ActionCell } from './action-cell'

type Transfer = z.infer<typeof transferSchema>

export const TableColumns: ColumnDef<Transfer>[] = [
  {
    accessorKey: 'product',
    header: 'Produto',
  },
  {
    accessorKey: 'code',
    header: 'Código',
  },
  {
    accessorKey: 'quantity',
    header: 'Quantidade',
  },
  {
    accessorKey: 'lote',
    header: 'Lote',
  },
  {
    accessorKey: 'validate',
    header: 'Validade',
  },
  {
    accessorKey: 'destination',
    header: 'Destino',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <span
        className={
          row.original.status === 'sent'
            ? 'text-green-500 font-semibold'
            : 'text-yellow-500 font-semibold'
        }
      >
        {row.original.status === 'sent' ? 'Enviado' : 'Pendente'}
      </span>
    ),
  },
  {
    accessorKey: 'actions',
    header: 'Ações',
    cell: ({ row }) => (
      <ActionCell status={row.original.status} id={row.original.id} />
    ),
  },
]
