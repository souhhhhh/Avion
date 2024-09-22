import styles from './MainPage.module.scss';
import classNames from 'classnames';
import { Hero } from '../../../widgets/Hero';
import { Brand } from '../../../entities/Brand';
import { Join } from '../../../widgets/join';

import { Idea } from '../../../entities/Idea';
import { SortProduct } from '../../../features/SortProduct';
import { TypeProductsEnum } from '../../../features/SortProduct/ui/SortProduct';
import { observer } from 'mobx-react';
import { ideaConst } from '../../../shared/lib/consts/IdeaConst/ideaConst';

export const MainPage = observer(() => {
	return (
		<div className={classNames(styles.MainPage)}>
			<Hero />
			<Brand />
			<SortProduct
				title='New ceramics'
				typeProducts={TypeProductsEnum.NEW_CERAMICS}
			/>
			<SortProduct
				title='Our popular products'
				typeProducts={TypeProductsEnum.All_CERAMICS_PRODUCTS}
			/>
			<Join />
			{
				ideaConst.slice(0,1).map((item) => ( 
					<Idea 
					MainText={item.MainText} 
					firstIdeaText={item.firstIdeaText}
					secondIdeaText={item.secondIdeaText}
					image={item.image}
					key={item.MainText}
					position={item.position}
					/>
				))
			}
		</div>
	);
});
