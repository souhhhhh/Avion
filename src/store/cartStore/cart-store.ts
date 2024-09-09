import { makeAutoObservable } from 'mobx';
import { IProduct } from '../../shared/lib/types/data';
import { ICartStore } from './cart-store.types';

class MobxStore {
	constructor() {
		makeAutoObservable(this);
	}

	cartstore = {
		items: [] as ICartStore[]
	};

	addToCartItems = (items: IProduct) => {
		this.cartstore.items.push({
			...items,
			items,
			quantity: 1
		});
	};
	removeItem(itemId: string) {
		this.cartstore.items = this.cartstore.items.filter(
			item => item.id !== itemId
		);
	}
}
export const mobxStore = new MobxStore();
