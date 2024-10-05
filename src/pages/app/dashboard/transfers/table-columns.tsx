import type { transferSchema } from '@/@types/transfer-schema'
import type { ColumnDef } from '@tanstack/react-table'
import type { z } from 'zod'

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
  },
  {
    accessorKey: 'orders',
    header: 'Orders',
  },
]
