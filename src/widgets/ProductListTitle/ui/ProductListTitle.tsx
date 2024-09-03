import { FC } from "react"

export const ProductListTitle: FC<{title: string}> = ({ title }) => {
  return (
    <p className="text-3xl font-normal text-left mt-40 mb-8 font-[Satoshi]">{title}</p>
  )
}
// font-family: ClashDisplay;
// font-size: 32px;
// font-weight: 400;
// text-align: left;
// margin-top: 160px;
// margin-bottom: 33px;