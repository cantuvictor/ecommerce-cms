import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import type { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type SidebarFormProps = {
    title: string;
    children: ReactNode;
    onSave: () => void;

}

export function SideBarForm({
    title,
    children,
    onSave
}:SidebarFormProps) {
    const navigate = useNavigate();
    const location = useLocation();

    function handleCloseForm(open: boolean) {
        if (!open) {
            const currentPath = location.pathname;
            const newPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
            navigate(newPath);
        }
    }

    return (
        <Sheet open={true} onOpenChange={handleCloseForm}>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>{title}</SheetTitle>
      <SheetDescription>
        Preencha os campos abaixo e clique em Salvar.
      </SheetDescription>
    </SheetHeader>

    {children}

    <SheetFooter>
        <div className="flex flex-row gap-1">

            <button onClick={onSave}>
                Salvar
            </button>

            <SheetClose>
                <button>
                    Cancelar
                </button>
            </SheetClose>

        </div>
    </SheetFooter>
  </SheetContent>
</Sheet>
    )
}