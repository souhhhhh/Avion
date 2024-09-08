import { FC } from "react"

export const ProductListTitle: FC<{title: string}> = ({ title }) => {
  return (
    <p className="text-3xl font-normal text-left mt-40 mb-8 font-ClashDisplay">{title}</p>
  )
}