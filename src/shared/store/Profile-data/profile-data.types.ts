export interface CountryValue { 
  countryFlag: string
  countryCallingCodes: number
  timezones: string
}

export interface PersonData { 
  firstName: string
  lastName: string
  phoneNumber: string
  countryData: CountryValue
}