import type { ProductDTO } from "@/cases/products/dtos/product.dto";


export interface OrdemItem {
    id?: string;
    product: ProductDTO;
    quantity: number;
    value: number;
}

export interface OrderDTO {
    id?: String;
    customer: any;
    status: string;
    total: number;
    items: OrdemItem[];
    createdAt: Date;
    updateAt: Date;
}