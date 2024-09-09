import { observer } from 'mobx-react';

import { ProductListTitle } from '../../../widgets/ProductListTitle';
import styles from './CartPage.module.scss'
import { CartItem } from '../../../entities/CartItem';
import { cartStore } from '../../../store/cartStore/cart-store';


export const CartPage = observer(() => {
	const { cart } = cartStore;
	console.log(cart)
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
						{cart.map(item => <div key={item.id}>
							<CartItem item={item} />
						</div>)}
					</div>
				</div>
			</div>
		</div>
	);
})
