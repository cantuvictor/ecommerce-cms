import type { ColumnDef } from "@tanstack/react-table";
import { DataTableAction } from "@/components/layout/data-table-action";
import type { CustomerDTO } from "../../dtos/customer";
import { custom } from "zod";


export const customerColumns: ColumnDef<CustomerDTO>[] = [
    {
        accessorKey: 'id',
        header: 'Id'
    },
    {
        accessorKey: 'name',
        header: 'Nome da Marca'
    },
    {
        accessorKey: 'city.name',
        header: 'Cidade/Estado',
        cell: ({ row }) => {
            const customer = row.original;
            
            return (
                <p>{`${customer.city?.name}/${customer.city?.state.acronym}`}</p>
            )}
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const customer = row.original;

            return(
                <div className="flex justify-end mr-4">
                    <DataTableAction itemId={customer.id!} />
                </div>
            )
        }
    }
];