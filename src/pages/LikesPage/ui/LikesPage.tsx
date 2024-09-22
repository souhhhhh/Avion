import { observer } from 'mobx-react';
import { LikesCard } from '../../../entities/LikesCard';
import { ProductListTitle } from '../../../shared/ui/ProductListTitle';

export const LikesPage = observer(() => {
	return (
		<div className='container'>
			<ProductListTitle title='Your likes' />
			<LikesCard />
		</div>
	);
});
