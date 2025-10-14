import { api } from "../../../lib/axios";
import type { CategoryDTO } from "../dtos/category.dto";

const _ENDPOINT = '/categories';

export const CategoryService = {

    async list(): Promise<CategoryDTO[]> {
        const result = await api.get(_ENDPOINT);
        return result.data;
    },

    async create(category: CategoryDTO): Promise<CategoryDTO> {
        const result = await api.post(_ENDPOINT);
        return result.data;
    },

    async getById(id: string): Promise<CategoryDTO> {},

    async update(id: string, category: CategoryDTO): Promise<CategoryDTO> {},

    async delete(id: string): Promise<void>{}

}