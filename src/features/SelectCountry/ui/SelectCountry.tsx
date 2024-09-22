import { observer } from "mobx-react"
import { FC } from "react"
import { profileStore } from "../../../shared/store/Profile-data/profile-data"
import { countryStore } from "../../../shared/store/getCountryData/getCountry-data"




export const SelectCountry: FC<{ setOpen: (arg: boolean) => void }> = observer(({ setOpen }) => {
  const { countryData } = countryStore
  const { getPersonalCountryData } = profileStore
  return (
    <div className="flex flex-col justify-center ml-2 bg-white absolute w-[150px] ">
      {countryData?.slice(16, 21)?.map((item) => (
        
        <div className="flex gap-5 hover:bg-[#e9e9ed] duration-500 cursor-pointer rounded-xl" key={item.name} 
        onClick={
          () => (getPersonalCountryData({ countryCallingCodes: item.callingCodes, countryFlag: item.flags.svg, timezones: item.timezones}),
          setOpen(false))        
        }>
          <span className="flex flex-col mb-2 " >
            <img src={item.flags.svg} alt="flag" width={45} height={45} />
          </span>
          <span>
            <p className="text-xl">{item.callingCodes}</p>
          </span>
        </div> 
      ))}
    </div>
  )
})
