import axios from "axios";


import { LikesPhoto, SERVER_URL } from "../../shared/lib/consts/constService/constService";




export const LikeService = { 

    async getLike() { 
        try { 
            const { data } = await axios.get(`${SERVER_URL}${LikesPhoto}`)
            return data
        }
        catch (error) { 
            console.log('Likes are not found')
        }
    }

}