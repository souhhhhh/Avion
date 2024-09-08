import { FC } from 'react';
import BrandBlock from '../../../entities/brandBlock/ui/BrandBlock';
import { BrandService } from '../../../entities/Services/BrandService';
import { Loader } from '../../../shared/ui/Loader/ui/Loader';
import styles from './Brand.module.scss';
import classNames from 'classnames';
import { useQuery } from 'react-query';
import { IDifferentBrand } from '../../../shared/lib/types/data';
export const Brand: FC = () => {
	
	const { data } = useQuery<IDifferentBrand<string>[]>({
		queryKey: ['different'],
		queryFn: () => BrandService.getBrandDifferent()
	});

	return (
		<div className='container'>
			<div className={classNames(styles.Different)}>
				<p className={styles.text}>What makes our brand different</p>
				<div className={styles.items}>
					<div className={styles.Block}>
						{data && (
							<div className='flex gap-10'>
								{data.length > 0 ? (
									data.slice(0, 4).map(items => (
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
