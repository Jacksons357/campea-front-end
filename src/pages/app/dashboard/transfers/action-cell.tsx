import { deleteTransfer, updateTransferStatus } from '@/lib/transfers'
import { FaTrash } from 'react-icons/fa'
import { useMutation, useQueryClient } from 'react-query'
import { RiFileTransferFill } from 'react-icons/ri'

interface ActionCellProps {
  id: string
  status: string
}

export function ActionCell({ id, status }: ActionCellProps) {
  const queryClient = useQueryClient()

  const { mutate: updateStatusMutate } = useMutation({
    mutationFn: async (id: string) => {
      await updateTransferStatus(id, 'sent')
    },
    onSuccess: () => {
      queryClient.invalidateQueries('transfers')
    },
  })

  const { mutate: deleteTransferMutate } = useMutation({
    mutationFn: async (id: string) => {
      await deleteTransfer(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries('transfers')
    },
  })

  return (
    <div className="flex gap-5">
      <button
        type="button"
        onClick={() => deleteTransferMutate(id)}
        className="text-red-500 hover:text-red-400 transition-all"
      >
        <FaTrash size={25} />
      </button>
      <button
        type="button"
        onClick={() => updateStatusMutate(id)}
        disabled={status === 'sent'}
        className="text-green-500 hover:text-green-400 transition-all"
      >
        <RiFileTransferFill size={29} />
      </button>
    </div>
  )
}
