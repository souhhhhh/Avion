import { FC, useEffect, useState } from "react"
import { IProduct } from "../../../shared/lib/types/data";
import { ProductList } from "../../ProductList";
import {useGetData} from '../../../shared/lib/hooks/useGetData'



export enum TypeProductsEnum { 
	NEW_CERAMICS = 'new_ceramics',
	All_CERAMICS_PRODUCTS = 'all_ceramics_product'
}

interface ISortProduct { 
	title: string
	typeProducts: TypeProductsEnum
}


export const SortProduct: FC<ISortProduct> = ({ title, typeProducts }) => {
	const [AllData, setAllData] = useState<IProduct[]>([]);
	useEffect(() => {
		useGetData(typeProducts, setAllData);
	  }, [typeProducts]);

  return (
    <ProductList title={title} typeProducts={AllData} />)}