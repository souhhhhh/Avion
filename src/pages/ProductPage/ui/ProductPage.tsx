import classNames from 'classnames';

import { Join } from '../../../widgets/join';
import { SortProduct } from '../../../features/SortProduct';
import { TypeProductsEnum } from '../../../features/SortProduct/ui/SortProduct';
import { Brand } from '../../../entities/Brand';
import styles from './ProductPage.module.scss';
import { useEffect } from 'react';
import { FullItemData } from '../../../entities/FullItem';

export const ProductPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className={classNames(styles.ProductPage)}>
			<FullItemData />
			<SortProduct
				title='You might also like'
				typeProducts={TypeProductsEnum.NEW_CERAMICS}
			/>
			<Brand />
			<Join />
		</div>
	);
};
