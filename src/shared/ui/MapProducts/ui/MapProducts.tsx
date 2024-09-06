import { FC, ReactNode } from 'react';

import styles from '../../../../widgets/ProductList/ui/ProductList.module.scss';
import type { IProduct, IDifferentBrand } from '../../../lib/types/data';
import { Loader } from '../../Loader';
import React from 'react';

export const MapProducts: FC<{ data: IProduct[] | IDifferentBrand<string>[], children: ReactNode }> = ({ data, children }) => {
	return (
		<div className='flex gap-10'>
			{data.length > 0 ? (
				data.slice(0, 4).map(items => (
					<div className={styles.block} key={items.id}>
						{React.isValidElement(children) ? React.cloneElement(children, { ...items }) : children}
					</div>
				))
			) : (
				<div className='flex justify-center items-center gap-20 mb-5'>
					<div className='flex gap-16 pb-16'>
						<Loader />
					</div>
				</div>
			)}
		</div>
	);
};
