import { makeAutoObservable } from 'mobx';

import { IProduct } from '../../shared/lib/types/data';
import { ICart } from './types';

class CartStore {
	constructor() {
		makeAutoObservable(this);
	}

	// ============ STATES ============
	cart: ICart[] = localStorage.getItem('cart')
		? JSON.parse(localStorage.getItem('cart')!)
		: [];
	// ============ MOVES ============
	addToCartItems = (product: IProduct) => {
		const index = this.cart.findIndex(item => item.id === product.id);
		if (index !== -1) this.cart[index].quantity += 1;
		else this.cart.push({ ...product, quantity: 1 });
		localStorage.setItem('cart', JSON.stringify(this.cart));
	};

	removeProductFromCart = (id: string) => {
		this.cart = this.cart.filter(item => item.id !== id);
		localStorage.setItem('cart', JSON.stringify(this.cart))
	};
}
export const cartStore = new CartStore();