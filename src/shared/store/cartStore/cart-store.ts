import { makeAutoObservable } from 'mobx';
import type { ICart } from './cart-store.types';
import { IProduct } from '../../lib/types/data';

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
		index !== -1 
		?	this.cart[index].quantity += 1 
		: this.cart.push({ ...product, quantity: 1 })
	
		localStorage.setItem('cart', JSON.stringify(this.cart));
	};

	removeProductFromCart = (id: string) => {
		this.cart = this.cart.filter(item => item.id !== id);
		localStorage.setItem('cart', JSON.stringify(this.cart))
	};
}
export const cartStore = new CartStore();