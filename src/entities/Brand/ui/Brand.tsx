import { FC } from 'react';
import { useQuery } from 'react-query';
import classNames from 'classnames';

import { BrandService } from '../../../app/Services/BrandService';
import { Loader } from '../../../shared/ui/Loader';
import { IDifferentBrand } from '../../../shared/lib/types/data';
import styles from './Brand.module.scss';
import { BrandBlock } from '../../brandBlock';

export const Brand: FC<{className?: string}> = ({ className }) => {
	const { data } = useQuery<IDifferentBrand<string>[]>({
		queryKey: ['different'],
		queryFn: () => BrandService.getBrandDifferent()
	});

	return (
		<div className='container'>
			<div className={classNames(styles.Different, [className])}>
				<p className={styles.text}>What makes our brand different</p>
				<div className={styles.items}>
					<div className={styles.Block}>
						{data && (
							<div className='flex gap-10'>
								{data.length > 0 ? (
									data
										.slice(0, 4)
										.map(items => (
											<BrandBlock
												id={items.id}
												differentName={items.differentName}
												differentValue={items.differentValue}
												img={items.img}
												key={items.id}
											/>
										))
								) : (
									<div className='flex justify-center items-center gap-20 mb-5'>
										<div className='flex gap-16 pb-16'>
											<Loader />
										</div>
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
