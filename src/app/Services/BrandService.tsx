import axios from "axios";


import { BRAND_DIFFRENT, SERVER_URL } from "../../shared/lib/consts/constService/constService";




export const BrandService = { 

    async getBrandDifferent() { 
        try { 
            const { data } = await axios.get(`${SERVER_URL}${BRAND_DIFFRENT}`)
            return data
        }
        catch (e) { 
            console.log('BrandDifferent are not found', e)
        }
    }
}
