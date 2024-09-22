import { makeAutoObservable, runInAction } from 'mobx';
import { CountryData } from './getCountry-types';
import { CountryService } from '../../../app/Services/CountryService';

class CountryStore {
	constructor() {
		makeAutoObservable(this);
	}

	// ============ STATES ============
	countryData: CountryData[] = [];
	// ============ MOVES ============

	getCountry = async () => {
		try {
			const country = await CountryService.getAllCountry();
			runInAction(() => {
				this.countryData = country;
			});
		} catch (err) {
			console.log('countryData is not found', err);
		}
	};
}
export const countryStore = new CountryStore();
