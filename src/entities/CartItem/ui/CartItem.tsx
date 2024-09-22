import { FC, useState } from "react"
import { IProduct } from "../../../shared/lib/types/data"

import cn from 'classnames'
import { Link } from "react-router-dom";
import { Button } from "../../../shared/ui/Button";
import { ButtonTheme } from "../../../shared/ui/Button/ui/Button";
import { cartStore } from "../../../shared/store/cartStore/cart-store";

export interface ICartItem extends IProduct {}






export const CartItem: FC<{item: ICartItem, quantity: number}> = ({item, quantity}) => {
  const [active, setActive] = useState(false)
  const { removeProductFromCart } = cartStore;
  return (
    <div className="gap-10 my-5 hover:scale-110 transition-all duration-300 flex">

      <div>
        <img src={item.img} alt="src" width={250} height={250}
        className="border rounded-lg mr-1" />
      </div>

      <div className="mt-5 text-purple-light font-Satoshi font-normal flex-col w-full">
    
        <div className="font-ClashDisplay text-2xl flex justify-between ">
          <p>{item.title}</p>

          <div className="flex justify-between">
            <p className='mr-80 font-Satoshi font-normal text-base'>{quantity}</p>
            <p className='font-Satoshi font-normal text-base ml-16'>£{item.price}</p>
          </div>

          </div>
          
        <p className="text-base">Price: £{item.price}</p>

        <button className={cn('text-[1rem] mt-5 duration-300', {
              'w-64 whitespace-nowrap overflow-hidden text-ellipsis': !active,
              'w-96 whitespace-normal text-sm text-left': active
            })}
        onClick={() => setActive(!active)}>{item.description}
        </button>
            <Link to={`/product/${item.id}`} className=" duration-300 font-normal block w-72 mt-4 text-center 
            rounded-md border-2 hover:bg-gray-light">Вернуться на страницу товара
            </Link>
            <Button theme={ButtonTheme.DELETE} 
            className="mt-3"
            onClick={() => removeProductFromCart(item.id)}
            >
              Удалить из корзины
            </Button>
      </div>
     </div>
  )
}



