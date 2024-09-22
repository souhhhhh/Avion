import { profileActions } from "../../../shared/lib/consts/consts"
import { Link } from "react-router-dom"
import { Icon } from "../../../shared/ui/Icon"
export const ProfileActions = () => {
  return (
    
    
    
  <div className="flex flex-col w-80 border rounded-lg gap-10 mr-10 relative">
    {profileActions.map((item) => (
      <div key={item.nameAction} className="flex w-full items-center justify-center gap-3 relative top-10">
        <Icon svg={item.Icon} className="mt-1" link path={item.path}  />
        <Link to={item.path} className="text-blue-light text-xl hover:text-[#40358a] duration-300">{item.nameAction}</Link>
      </div>
    ))}
  </div>)}