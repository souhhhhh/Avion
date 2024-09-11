import { observer } from 'mobx-react';

import { ProductListTitle } from '../../../widgets/ProductListTitle';
import { CartItem } from '../../../entities/CartItem';
import { cartStore } from '../../../store/cartStore/cart-store';
import { Button } from '../../../shared/ui/Button';
import { ButtonTheme } from '../../../shared/ui/Button/ui/Button';

export const CartPage = observer(() => {
	const { cart } = cartStore;
	const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
	return (
		<div className='container'>
				<div>
					<ProductListTitle title='Your shopping cart' />
					<div className='flex justify-between mt-16 font-ClashDisplay font-normal text-sm border-b border-b-[#EBE8F4] '>
						<p>Product</p>
						<div className='flex mb-4'>
							<p className='mr-[384px]'>Quantity</p>
							<p>Total</p>
						</div>
					</div>
					<div>
						{cart.map(item => (
							<div key={item.id}>
								<CartItem item={item} quantity={item.quantity} />
							</div>
						))}
					</div>
					<div className='font-ClashDisplay text-right'>
						<p className='font-normal text-xl text-[#4E4D93]'>
							Subtotal <span className='text-purple-light font-normal text-2xl ml-3'>£{totalPrice}</span>
						</p>
						<Button theme={ButtonTheme.PURPLE} className='mt-4 mb-10'>Go to checkout</Button>
					</div>
				</div>
		</div>
	);
});
