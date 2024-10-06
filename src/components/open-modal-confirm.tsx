import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'

interface OpenModalConfirmProps {
  handleDelete: () => void
  setOpenModal: (open: boolean) => void
  openModal: boolean
}

export function OpenModalConfirm({
  handleDelete,
  setOpenModal,
  openModal,
}: OpenModalConfirmProps) {
  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Tem certeza que deseja excluir essa transferência?
          </DialogTitle>
          <DialogDescription>
            Após excluir, não terá como recuperar.
          </DialogDescription>
          <div className="flex justify-end">
            <DialogFooter>
              <button onClick={() => setOpenModal(false)} type="button">
                Cancelar
              </button>
              <Button onClick={handleDelete} className="" variant="destructive">
                Excluir
              </Button>
            </DialogFooter>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
