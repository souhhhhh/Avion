import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';

import { Button } from '../../../shared/ui/Button';
import { Dimensions, IProduct } from '../../../shared/lib/types/data';
import { ButtonTheme } from '../../../shared/ui/Button/ui/Button';
import { cartStore } from '../../../store/cartStore/cart-store';
import { getCard } from '../api/get-card';



	export const FullItemData = observer(() => {
	
	const [product, setProduct] = useState<IProduct | null>();
	const { id } = useParams();

	const { addToCartItems } = cartStore;

	const getData = async () => {
		if (!id) return
		const data = await getCard(id)
		setProduct(data)
	  } 

	useEffect(() => {getData()}, []);

	return product && (
		<div className='text-green-500 flex justify-center mt-10 font-Satoshi'>
			<div className='flex  mt-10'>
				<img src={product.bigImg} alt='' />
				<div className='p-10  ml-16 mt-14'>
					<p className='font-normal text-4xl text-purple-light pr-[281px] font-ClashDisplay'>
						{product.title}
					</p>
					<p className='font-normal text-3xl text-purple-dark mt-5'>
						£{product.price}
					</p>
					<div>
						<p className='text-dasda font-normal text-xl mt-16 mb-10 font-ClashDisplay text-purple-light'>
							Description
						</p>
						<p className='w-[491px] h-[59px] text-blue-light'>
							{product.description}
						</p>
					</div>
					<div>
						{product.plus.map(plus => (
							<ul
								className='mt-10 font-Satoshi text-mg text-blue-light pl-5'
								key={plus.material}
							>
								<li className='list-disc'>{plus.material}</li>
								<li className='list-disc'>{plus.handmadeUpholstery}</li>
								<li className='list-disc'>{plus.conclusion}</li>
							</ul>
						))}

						{product.dimensions.map((item: Dimensions) => (
							<div key={item.Height}>
								<p className='mt-10 font-ClashDisplay font-normal text-xl text-purple-light'>
									Dimensions
								</p>
								<div className='flex gap-10 mt-10 '>
									<div>
										<p className='text-purple-light'>Height</p>
										<p className='text-blue-light mt-5'>{item.Height}cm</p>
									</div>

									<div>
										<p className='text-purple-light'>Width</p>
										<p className='text-blue-light mt-5'>{item.Width}cm</p>
									</div>

									<div>
										<p className='text-purple-light'>Depth</p>
										<p className='text-blue-light mt-5'>{item.Depth}cm</p>
									</div>
								</div>
							</div>
						))}

						<div className='mt-10 flex gap-10'>
							<Button
								theme={ButtonTheme.PURPLE}
								onClick={() => addToCartItems(product)}
							>
								Add to cart
							</Button>
							<Button theme={ButtonTheme.WHITE}>Add to favorites</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
})