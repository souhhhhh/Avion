import { FC } from "react"


import cn from 'classnames'
export const ProfileText: FC<{label: string, className?: string}> = ({ label, className }) => {


  return (
    <p className={cn("text-lg text-purple-light font-ClashDisplay ml-2", [className])}>{label}</p>
  )
}
