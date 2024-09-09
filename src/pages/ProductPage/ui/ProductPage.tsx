import classNames from 'classnames';

import { CardItem } from '../../../entities/CardItem';
import { Join } from '../../../widgets/join';
import { SortProduct } from '../../../widgets/SortProduct';
import { TypeProductsEnum } from '../../../widgets/SortProduct/ui/SortProduct';
import { Brand } from '../../../widgets/Brand';
import styles from './ProductPage.module.scss';

export const ProductPage = () => {
  return (
  <div className={classNames(styles.ProductPage)}>
      <CardItem />
      <SortProduct title='You might also like' typeProducts={TypeProductsEnum.NEW_CERAMICS} />
      <Brand />
      <Join />
  </div>)
};