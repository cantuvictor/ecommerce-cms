import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CategoryDTO } from "../dtos/category.dto";
import { CategoryService } from "../services/category.service";
import { toast } from "react-toastify";

export function useCategories() {
    return useQuery<CategoryDTO[]>({
        queryKey: ['categories'],
        queryFn: CategoryService.list
    });
}

export function useCategory(id: string) {
    return useQuery<CategoryDTO>({
        queryKey: ['category', id],
        queryFn: () => CategoryService.getById(id),
        enabled: !!id
    });
}

export function useCreateCategory(){
    const QueryClient = useQueryClient();
    return useMutation<CategoryDTO, Error, Omit<CategoryDTO, 'id'>>({
        mutationFn: (category: Omit<CategoryDTO, 'id'>) => CategoryService.create(category),
        onSuccess: () => {
            QueryClient.invalidateQueries({queryKey: ['categories']});
            toast.success('Registro adicionado com sucesso!')

        },
        onError: (error) => {
            toast.error(`Erro ao adicionar: ${error.message}`)
        }
    });
}

export function useUpdateCategory(){
    const QueryClient = useQueryClient();
    return useMutation<CategoryDTO, Error, {id: string, category: CategoryDTO}>({
        mutationFn: ({id, category}) => CategoryService.update(id, category),
        onSuccess: () => {
            QueryClient.invalidateQueries({queryKey: ['categories']});
            toast.success('Registro alterado com sucesso!')

        },
        onError: (error) => {
            toast.error(`Erro ao alterar: ${error.message}`)
        }
    });
}    
    
export function useDeleteCategory(){
    const QueryClient = useQueryClient();
    return useMutation<void, Error, string>({
        mutationFn: (id: string) => CategoryService.delete(id),
        onSuccess: () => {
            QueryClient.invalidateQueries({queryKey: ['categories']});
            toast.success('Registro deletado com sucesso!')

        },
        onError: (error) => {
            toast.error(`Erro ao excluir: ${error.message}`)
        }
    });    
}