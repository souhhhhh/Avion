import { IProduct } from '../../shared/lib/types/data';


export interface ICart extends IProduct {
    quantity: number
}