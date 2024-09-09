import { IProduct } from '../../shared/lib/types/data';

type TQuantity = { quantity: number };

export interface ICart extends IProduct, TQuantity {}