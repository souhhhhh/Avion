import { Link } from "react-router-dom"
import { Button } from "../../../shared/ui/Button"
import { ButtonTheme } from "../../../shared/ui/Button/ui/Button"
import { observer } from "mobx-react"
import { likesStore } from "../../../shared/store/likesStore/likesStore-data"



export const LikesCard = observer(() => {
  const { likes, deleteFromLikes } = likesStore
  return (
    
    <div className="flex gap-10 items-center relative flex-wrap">
      {likes.map((like) => ( 
          <div className="w-96 flex items-center flex-col border rounded-xl
          hover:scale-105 duration-300 hover:bg-slate-400
          " key={like.id}>
            <img src={like.img} alt="" width={250} height={200} className="border border-transparent 
             rounded-xl
             relative top-5 outline-none
             font-ClashDisplay flex flex-col" />
            <p className="mt-10 text-xl text-purple-dark ">{like.title}</p>
            <p className="text-xl ">${like.price}</p>
            <div className="flex justify-between m-1 mt-5 gap-10">
            <Link to={`/product/${like.id}`}
            className=" text-text-purple-dark  border rounded-xl text-white text-base 
            text-center  items-center bg-purple-light
            p-3 border-none
            hover:bg-[#413974] duration-300"
            >Return to the product page</Link>
            <Button theme={ButtonTheme.PURPLE} className="rounded-xl"
            onClick={() => deleteFromLikes(like.id)}>Delete from favorites</Button>
            </div>
          </div>
      ))}
    </div>
  )
})
