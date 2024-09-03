import styles from './ProductPage.module.scss';
import classNames from 'classnames';
import { FullItemData } from '../../../entities/FullItemData';
import { ProductList } from '../../../widgets/ProductList';
import { Join } from '../../../widgets/join';

export const ProductPage = () => {

  return (
  <div className={classNames(styles.ProductPage)}>
      <FullItemData />
      <ProductList title='You might also like' />
      <Join />
  </div>)
  ;
};