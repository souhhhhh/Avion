import styles from './MainPage.module.scss';
import classNames from 'classnames';
import { Hero } from '../../../widgets/Hero';
import { Brand } from '../../../widgets/Brand';
import { Join } from '../../../widgets/join';

import { ProductList } from '../../../widgets/ProductList';
import { Idea } from '../../../widgets/Idea';

interface MainPageProps {
	className?: string;
}

export const MainPage = ({ className }: MainPageProps) => {
	return (
		<div className={classNames(styles.MainPage)}>
			<Hero />
			<Brand />
			<ProductList title='New ceramics' />
			<ProductList title='Our popular products' />
			<Join />
			<Idea />
		</div>
	);
};
