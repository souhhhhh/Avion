import axios from "axios"
import { IProduct } from "../../shared/lib/types/data"
import { NEW_PRODUCTS, PRODUCTS, SERVER_URL } from "../../shared/lib/consts/constService/constService"





export const ProductService = {
  async getAllProducts() {
    try { 
        const { data } = await axios.get<IProduct[]>(`${SERVER_URL}${PRODUCTS}`);
        return data;
    }
    catch (error) { 
        console.log('AllProducts in not found', (error))
    }
  },

  async getCeramicProducts() { 
    try { 
        const { data } = await axios.get<IProduct[]>(`${SERVER_URL}${PRODUCTS}?material=ceramics`);
        return data;
    }
    catch (error) { 
        console.log('CeramicProducts', error)
    }
  },

  async getNewProducts() { 
    try { 
        const { data } = await axios.get<IProduct[]>(`${SERVER_URL}${PRODUCTS}?${NEW_PRODUCTS}=${true}`);
        return data;
    }
    catch (error) { 
        console.log('NewProducts is not found', error)
    }
    }
};

