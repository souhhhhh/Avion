import { IProduct } from "../../shared/lib/types/data";

export interface ICartStore { 
    id: string
    items: IProduct
    quantity: number
}