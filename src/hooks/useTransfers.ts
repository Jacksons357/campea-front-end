import type { transferSchema } from '@/@types/transfer-schema'
import { getTransfers } from '@/lib/transfers'
import { useQuery } from 'react-query'
import type { z } from 'zod'

type Transfer = z.infer<typeof transferSchema>

export function useTransfers() {
  const {
    data: transfers = [],
    isLoading,
    error,
  } = useQuery<Transfer[], Error>('transfers', getTransfers)

  return { transfers, isLoading, error }
}
