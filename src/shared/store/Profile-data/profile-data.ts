import { makeAutoObservable } from 'mobx';
import { CountryValue, PersonData } from './profile-data.types';




class ProfileStore {
	constructor() {
		makeAutoObservable(this);
	}

	// ============ STATES ============

  getPersonCountryData: CountryValue = localStorage.getItem('countryData')
  ? JSON.parse(localStorage.getItem('countryData')!)
  : [{ 
    countryFlag: '',
    countryCallingCodes: 7,
    timeZones: ''
  }]



  getPersonData: PersonData = 
    {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      countryData: this.getPersonCountryData
    } 
  // ============ MOVES ============


  getPersonalCountryData = async ({ countryFlag, countryCallingCodes, timezones  }: CountryValue) => { 
    this.getPersonCountryData = { countryFlag, countryCallingCodes, timezones }
    localStorage.setItem('countryData', JSON.stringify(this.getPersonCountryData))
  }


  getPersonDataProfile = async (props: PersonData) => { 
     this.getPersonData = props
  }

   
}
export const profileStore = new ProfileStore();