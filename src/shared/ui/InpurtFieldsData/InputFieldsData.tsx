import { FC } from "react"
import { InputProfile } from "../InputProfile"
import { InputProfileTheme } from "../InputProfile/ui/InputProfile"


export const InputFieldsData: FC<IInputFieldsData> = ({ placeholder, label }) => {
  return (
    <div className="flex flex-col ml-10">
      <p className="text-lg text-purple-light font-ClashDisplay ml-2">{label}</p>
      <InputProfile
        theme={InputProfileTheme.DEFAULT}
        placeholder={placeholder}
        className="mt-3"/>
  </div>
  )
}

interface IInputFieldsData { 
  placeholder: string
  label: string
}