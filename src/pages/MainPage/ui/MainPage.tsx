import styles from './MainPage.module.scss';
import classNames from 'classnames';
import { Hero } from '../../../widgets/Hero';
import { Brand } from '../../../widgets/Brand';
import { Join } from '../../../widgets/join';

import { Idea } from '../../../widgets/Idea';
import { SortProduct } from '../../../widgets/SortProduct';
import { TypeProductsEnum } from '../../../widgets/SortProduct/ui/SortProduct';


export const MainPage = () => {
	return (
		<div className={classNames(styles.MainPage)}>
			<Hero />
			<Brand />
			<SortProduct title='New ceramics' typeProducts={TypeProductsEnum.NEW_CERAMICS} />
			<SortProduct title='Our popular products' typeProducts={TypeProductsEnum.All_CERAMICS_PRODUCTS} />
			<Join />
			<Idea />
		</div>
	);
};
