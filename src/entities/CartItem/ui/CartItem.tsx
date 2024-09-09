import { FC } from "react"
import { IDifferentBrand, IProduct } from "../../../shared/lib/types/data"

import { BrandService } from "../../Services/BrandService";

export interface ICartItem extends IProduct {}



export const CartItem: FC<{item: ICartItem}> = ({item}) => {
  return (
    <div>
      <p>{item.title}</p> 
     </div>
  )
}
