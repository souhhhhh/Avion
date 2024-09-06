import axios from "axios";


import { SERVER_URL } from "./ProductService";


const BRAND_DIFFRENT = 'BrandDifferent'

export const BrandService = { 

    async getBrandDifferent() { 
        const { data } = await axios.get(`${SERVER_URL}/${BRAND_DIFFRENT}`)
        return data
    }

}