import axios from "axios"
import { ALL_COUNTRY, SERVER_URL } from "../../shared/lib/consts/constService/constService"
import { CountryData } from "../../shared/store/getCountryData/getCountry-types"








export const CountryService = { 

  async getAllCountry() { 
      const { data } = await axios.get<CountryData[]>(`${SERVER_URL}${ALL_COUNTRY}`)
      return data
  }
}