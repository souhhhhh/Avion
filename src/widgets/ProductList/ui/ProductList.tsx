import { Button, ButtonTheme } from '../../../shared/ui/Button/ui/Button';
import { ProductListTitle } from '../../../shared/ui/ProductListTitle';

import styles from './ProductList.module.scss';
import classNames from 'classnames';
import { MapProducts } from '../../../shared/ui/MapProducts/ui/MapProducts';
import { ProductCard } from '../../../features/ProductCard';
import { observer } from 'mobx-react';

interface ProductListProps {
	className?: string;
	title: string;
	typeProducts: any;
}

export const ProductList = observer(
	({ title, typeProducts }: ProductListProps) => {
		return (
			<div className='container'>
				<div className={classNames(styles.ProductList)}>
					<ProductListTitle title={title} />

					<div className='flex justify-center items-center gap-5 mb-5'>
						{/* @ts-ignore */}
						<MapProducts data={typeProducts} children={<ProductCard />} />
					</div>

					<div className={styles.button}>
						<Button theme={ButtonTheme.WHITE}>View collection</Button>
					</div>
				</div>
			</div>
		);
	}
);
