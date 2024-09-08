import { useParams } from "react-router-dom"
import { Dimensions,  IProduct,  Plus } from "../../../shared/lib/types/data"
import { useEffect, useState } from "react"
import axios from "axios"



export const FullItemData = () => {
    
    const { id } = useParams()
    const [fullItemData,setFullItemData] = useState<IProduct | null>()

    useEffect(() => { 
        const getData = async () => {
          const response = await axios.get(`http://localhost:3000/AllData/${id}`)
          setFullItemData(response.data)
        }   
      getData()
    }, [id])

  return !fullItemData ? null : (
        
    <div className="text-green-500 flex justify-center mt-10 font-Satoshi">
        <div className="flex  mt-10">
            <img src={fullItemData.bigImg} alt="" />
            <div className="p-10  ml-16 mt-14">
                <p className="font-normal text-4xl text-purple-light pr-[281px] font-ClashDisplay">{fullItemData.title}</p>
                <p className="font-normal text-3xl text-purple-dark mt-5">£{fullItemData.price}</p>
                <div>
                    <p className="text-dasda font-normal text-xl mt-16 mb-10 font-ClashDisplay text-purple-light">Description</p>
                    <p className="w-[491px] h-[59px] text-blue-light">{fullItemData.description}</p>
                </div>
                <div>
                    {
                       fullItemData.plus.map((item: Plus) => ( 
                           <ul className="mt-10 font-Satoshi text-mg text-blue-light pl-5" key={item.material}>
                            <li className="list-disc">{item.material}</li>
                            <li className="list-disc">{item.handmadeUpholstery}</li>
                            <li className="list-disc">{item.conclusion}</li>
                        </ul>
                       )) 
                    }

                    {
                       fullItemData.dimensions.map((item: Dimensions) => ( 
                        <div key={item.Height}>
                            <p className="mt-10 font-ClashDisplay font-normal text-xl text-purple-light">Dimensions</p>
                            <div className="flex gap-10 mt-10 ">
                                <div>
                                    <p className="text-purple-light">Height</p>
                                    <p className="text-blue-light mt-5">{item.Height}cm</p>
                                </div>
                                
                                
                                
                                
                                <div>
                                    <p className="text-purple-light">Width</p>
                                    <p className="text-blue-light mt-5">{item.Width}cm</p>
                                </div>

                                <div>
                                    <p className="text-purple-light">Depth</p>
                                    <p className="text-blue-light mt-5">{item.Depth}cm</p>
                                </div>
                            </div>
                        </div>
                       )) 
                    }
                </div>
            </div>
        </div>
    </div>

  )
}

