import { observer } from 'mobx-react';

import { ProductListTitle } from '../../../widgets/ProductListTitle';
import { cartStore } from '../../../store/cartStore/cart-store';
import styles from './CartPage.module.scss'

export const CartPage = observer(() => {
	// cart store also including a special function for remove product from cart.
	const { cart } = cartStore;

import { mobxStore } from '../../../store/cartStore/cart-store';
import { CartItem } from '../../../entities/CartItem';

export const CartPage = observer(() => {
	const { items } = mobxStore;
	console.log(items)
	return (
		<div className='container'>
			<div>
				<div>
					<ProductListTitle title='Your shopping cart' />
					<ul className={styles.columns}>
						<li>Product</li>
						<li>Quantity</li>
						<li>Total</li>
					</ul>
					<div>
						{/* TODO: display a cart item */}
						{cart.map(item => <div key={item.id}></div>)}
					</div>
					{items?.map((cartItems) => ( 
						<CartItem item={cartItems.items} key={cartItems.id} />
					))}
				</div>
			</div>
		</div>
	);
})}
