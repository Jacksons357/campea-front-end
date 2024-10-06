import { deleteTransfer, updateTransferStatus } from '@/lib/transfers'
import { FaTrash } from 'react-icons/fa'
import { useMutation, useQueryClient } from 'react-query'
import { RiFileTransferFill } from 'react-icons/ri'
import { OpenModalConfirm } from '@/components/open-modal-confirm'
import { useState } from 'react'

interface ActionCellProps {
  id: string
  status: string
}

export function ActionCell({ id, status }: ActionCellProps) {
  const [openModal, setOpenModal] = useState(false)
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

  function handleDelete() {
    deleteTransferMutate(id)
    setOpenModal(false)
  }

  return (
    <div className="flex gap-5">
      <button
        type="button"
        onClick={() => setOpenModal(true)}
        className="text-red-500 hover:text-red-400 transition-all"
      >
        <FaTrash size={25} />
      </button>

      <OpenModalConfirm
        setOpenModal={setOpenModal}
        handleDelete={handleDelete}
        openModal={openModal}
      />

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
