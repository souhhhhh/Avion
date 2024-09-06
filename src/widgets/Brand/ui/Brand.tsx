import BrandBlock from '../../../entities/brandBlock/ui/BrandBlock';
import { BrandService } from '../../../entities/Services/BrandService';
import { MapProducts } from '../../../shared/ui/MapProducts/ui/MapProducts';
import styles from './Brand.module.scss';
import classNames from 'classnames';
import { useQuery } from 'react-query';

export const Brand = () => {

  const { data } = useQuery({
    queryKey: ['different'],
    queryFn: () => BrandService.getBrandDifferent(),
  })

	return (
		<div className='container'>
			<div className={classNames(styles.Different)}>
				<p className={styles.text}>What makes our brand different</p>
				<div className={styles.items}>
					<div className={styles.Block}>
          {data && <MapProducts children={<BrandBlock id={''} differentName={''} differentValue={''} img={''} />} data={data} />}
					</div>
				</div>
			</div>
		</div>
	);
};
