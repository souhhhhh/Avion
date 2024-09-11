import { FC } from "react"
import cn from 'classnames'

import { InputProfile } from "../../../shared/ui/InputProfile"
import { InputProfileTheme } from "../../../shared/ui/InputProfile/ui/InputProfile"

import { ProductListTitle } from "../../ProductListTitle"

export const ContactDetails: FC<IContactDetails> = ({ className }) => {

    return (
        <div className={cn("border border-[#f4f4f4] rounded-md", [className])}>
        <ProductListTitle title="Your profile" className="mt-5 ml-10" />
        <div className="grid grid-cols-2 gap-10">

            <div className="flex flex-col ml-10">
                <p className="text-lg text-purple-light font-ClashDisplay ml-2">First Name</p>
                <InputProfile theme={InputProfileTheme.DEFAULT} placeholder="First Name" className="mt-3"></InputProfile>
            </div>

            <div className="flex flex-col ml-40">
                <p className="text-lg text-purple-light font-ClashDisplay ml-2">Last Name</p>
                <InputProfile theme={InputProfileTheme.DEFAULT} placeholder="First Name" className="mt-3"></InputProfile>
            </div>

            <div className="flex flex-col ml-10">
                <p className="text-lg text-purple-light font-ClashDisplay ml-2">Phone number</p>
                <InputProfile theme={InputProfileTheme.DEFAULT} placeholder="First Name" className="mt-3"></InputProfile>
            </div>
        </div>
    </div>
  )
}

interface IContactDetails { 
    className?: string
}