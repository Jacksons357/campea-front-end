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
  setOpenModalDelete: (open: boolean) => void
  openModalDelete: boolean
}

export function OpenModalConfirm({
  handleDelete,
  setOpenModalDelete,
  openModalDelete,
}: OpenModalConfirmProps) {
  return (
    <Dialog open={openModalDelete} onOpenChange={setOpenModalDelete}>
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
              <button onClick={() => setOpenModalDelete(false)} type="button">
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
