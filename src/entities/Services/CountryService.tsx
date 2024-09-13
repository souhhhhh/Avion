import axios from "axios"
import { SERVER_URL } from "./ProductService"
import { CountryData } from "../../shared/lib/types/country.data"






const ALL_COUNTY = 'AllCountry'

export const CountryService = { 
  async getAllCountry() { 
    const { data } = await axios.get<CountryData>(`${SERVER_URL}/${ALL_COUNTY}`)
    console.log(data)
    return data
  }
}