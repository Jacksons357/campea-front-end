import { deleteTransfer, updateTransferStatus } from '@/lib/transfers'
import { FaTrash } from 'react-icons/fa'
import { useMutation, useQueryClient } from 'react-query'
import { RiFileTransferFill } from 'react-icons/ri'
import { OpenModalConfirm } from '@/components/open-modal-confirm'
import { useState } from 'react'
import { toast } from 'sonner'
import { OpenModalSendTransfer } from '@/components/open-modal-send-transfer'

interface ActionCellProps {
  id: string
  status: string
}

export function ActionCell({ id, status }: ActionCellProps) {
  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [openModalSendTransfer, setOpenModalSendTransfer] = useState(false)
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

  function handleUpdating() {
    updateStatusMutate(id)
    setOpenModalSendTransfer(false)
    toast('Transferencia enviada!')
  }

  function handleDelete() {
    deleteTransferMutate(id)
    setOpenModalDelete(false)
    toast('Transferencia removida com sucesso!')
  }

  return (
    <div className="flex gap-5">
      <button
        type="button"
        onClick={() => setOpenModalDelete(true)}
        className="text-red-500 hover:text-red-400 transition-all"
      >
        <FaTrash size={25} />
      </button>

      <OpenModalConfirm
        setOpenModalDelete={setOpenModalDelete}
        handleDelete={handleDelete}
        openModalDelete={openModalDelete}
      />
      <button
        type="button"
        onClick={() => setOpenModalSendTransfer(true)}
        disabled={status === 'sent'}
        className="text-green-500 hover:text-green-400 transition-all"
      >
        <RiFileTransferFill size={29} />
      </button>

      <OpenModalSendTransfer
        handleUpdating={handleUpdating}
        openModalSendTransfer={openModalSendTransfer}
        setOpenModalSendTransfer={setOpenModalSendTransfer}
        id={id}
      />
    </div>
  )
}
