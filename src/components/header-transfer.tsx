import { useState } from 'react'
import { FormNewTransfer } from './form-new-transfer'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'

export function HeaderTransfer() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Transferencias</h1>
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogTrigger>
          <Button variant="default">Adicionar transferencia</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[350px]">
          <FormNewTransfer setOpenModal={setOpenModal} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
