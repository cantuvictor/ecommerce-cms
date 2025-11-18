import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CustomerService } from "../services/customer.service";
import { toast } from "react-toastify";
import type { CustomerDTO } from "../dtos/customer";



export function useCustomers() {
    return useQuery<CustomerDTO[]>({
        queryKey: ['brands'],
        queryFn: CustomerService.list
    });
}

export function useCustomer(id: string) {
    return useQuery<CustomerDTO>({
        queryKey: ['brand', id],
        queryFn: () => CustomerService.getById(id),
        enabled: !!id //-> or Boolean(id)
    });
}

