import { makeAutoObservable } from 'mobx';

import { IProduct } from '../../shared/lib/types/data';
import { ICart } from './types';
import { ICartStore } from './cart-store.types';

class CartStore {
	constructor() { makeAutoObservable(this) }

	// ============ STATES ============
	cart: ICart[] = [];

	// ============ MOVES ============
	addToCartItems = (product: IProduct) => {
		const index = this.cart.findIndex(item => item.id === product.id);

		if (index !== -1) this.cart[index].quantity += 1;
		else this.cart.push({ ...product, quantity: 1 });
	};

	removeProductFromCart = (id: string) => this.cart = this.cart.filter(item => item.id !== id);
	items = [] as ICartStore[]

	
	
	
	
	
	addToCartItems(item: ICartStore) {this.items.push({ ...item, id: item.id });
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
export const cartStore = new CartStore();
