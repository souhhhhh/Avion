import { observer } from 'mobx-react';

import { ProductListTitle } from '../../../widgets/ProductListTitle';
import { cartStore } from '../../../store/cartStore/cart-store';
import styles from './CartPage.module.scss'

export const CartPage = observer(() => {
	// cart store also including a special function for remove product from cart.
	const { cart } = cartStore;

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
				</div>
			</div>
		</div>
	);
});
