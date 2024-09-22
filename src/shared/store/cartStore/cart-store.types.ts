import { IProduct } from "../../lib/types/data";



export interface ICart extends IProduct {
    quantity: number
}