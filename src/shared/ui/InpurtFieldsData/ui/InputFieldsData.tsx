import { FC } from "react"
import { ProfileText } from "../../ProfileText"
import { InputProfile, InputProfileTheme } from "../../InputProfile/ui/InputProfile"

import { observer } from "mobx-react"




export const InputFieldsData: FC<IInputFieldsData> = observer(({ label, theme, placeholder, disabled }) => {
  return (
    <div className="flex flex-col ml-10">
      <ProfileText label={label} />
      <InputProfile theme={theme} placeholder={placeholder} stringInput disabled={disabled} />
  </div>
  )
})

interface IInputFieldsData { 
  placeholder?: string
  theme: InputProfileTheme
  label: string
  disabled: boolean
  value: string
  


}