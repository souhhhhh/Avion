import axios from "axios"
import { IProduct } from "../../shared/lib/types/data"





const PRODUCTS = '/AllData'
const NEW_PRODUCTS = 'releaseData'
export const SERVER_URL="http://localhost:3000"
export const ProductService = {

  async getAllProducts() {        
    const {data} = await axios.get<IProduct>(`${SERVER_URL}${PRODUCTS}`)
    return data
  },

  async getCeramicProducts() { 
    const {data} = await axios.get<IProduct>(`${SERVER_URL}${PRODUCTS}?material=ceramics`)
    return data
  },

  async getNewProducts() { 
    const { data } = await axios.get<IProduct>(`${SERVER_URL}${PRODUCTS}?${NEW_PRODUCTS}=${true}`)
    return data
  }
  
}

