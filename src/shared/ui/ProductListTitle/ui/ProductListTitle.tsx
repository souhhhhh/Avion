import { FC } from "react"
import cn from 'classnames'
interface IProductListTitle { 
  title: string
  className?: string
}
export const ProductListTitle: FC<IProductListTitle> = ({ title, className }) => {

  return (
    <p className={cn("text-3xl font-normal text-left mt-40 mb-8 font-ClashDisplay", [className])}>{title}</p>
  )
}