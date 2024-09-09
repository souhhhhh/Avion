import { IProduct } from "../../shared/lib/types/data";

export interface ICartStore {
	quantity: number
    id: string
    items: IProduct
    // quantity: number
}