import { observer } from 'mobx-react';
import { ProductListTitle } from '../../../widgets/ProductListTitle';
import { mobxStore } from '../../../store/cartStore/cart-store';
import { CartItem } from '../../../entities/CartItem';

export const CartPage = observer(() => {
	const { items } = mobxStore;
	console.log(items)
	return (
		<div className='container'>
			<div className=''>
				<div>
					<ProductListTitle title='Your shopping cart' />
					<div className='flex justify-between mt-16 font-ClashDisplay font-normal text-sm border-b border-b-[#EBE8F4] '>
						<p>Product</p>
						<div className='flex mb-4'>
							<p className='mr-[384px]'>Quantity</p>
							<p>Total</p>
						</div>
					</div>
					{items?.map((cartItems) => ( 
						<CartItem item={cartItems.items} key={cartItems.id} />
					))}
				</div>
			</div>
		</div>
	);
});
