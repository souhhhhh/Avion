import { makeAutoObservable } from 'mobx';
import { ICartStore } from './cart-store.types';

class MobxStore {
	constructor() {
		makeAutoObservable(this);
	}

	items = [] as ICartStore[]

	
	
	
	
	
	addToCartItems(item: ICartStore) {this.items.push({ ...item, id: item.id });
	}

	removeItem(itemId: string) {
		this.items = this.items.filter(
			item => item.id !== itemId
		);
	}
}
export const mobxStore = new MobxStore();
