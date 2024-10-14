import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'

interface OpenModalSendTransferProps {
  handleUpdating: (id: string) => void
  setOpenModalSendTransfer: (open: boolean) => void
  openModalSendTransfer: boolean
  id: string
}

export function OpenModalSendTransfer({
  handleUpdating,
  openModalSendTransfer,
  setOpenModalSendTransfer,
  id,
}: OpenModalSendTransferProps) {
  return (
    <Dialog
      open={openModalSendTransfer}
      onOpenChange={setOpenModalSendTransfer}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enviar nota de transferência</DialogTitle>
          <DialogDescription>
            Informe o número da nota de transferência gerada no procfit.
          </DialogDescription>
          <div className="flex justify-end flex-col space-y-3">
            <Input />
            <DialogFooter>
              <button
                onClick={() => setOpenModalSendTransfer(false)}
                type="button"
              >
                Cancelar
              </button>
              <Button
                onClick={() => handleUpdating(id)}
                className=""
                variant="default"
              >
                Enviar
              </Button>
            </DialogFooter>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
