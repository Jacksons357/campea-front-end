import { useState } from 'react'
import { FormNewTransfer } from './form-new-transfer'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

export function HeaderTransfer() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Transferencias</h1>
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogTrigger asChild>
          <Button variant="default" className="dark:text-zinc-200">
            Nova transferência
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[350px]">
          <DialogHeader>
            <DialogTitle>Nova transferência</DialogTitle>
            <DialogDescription>Preencha os campos</DialogDescription>
          </DialogHeader>
          <FormNewTransfer setOpenModal={setOpenModal} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
