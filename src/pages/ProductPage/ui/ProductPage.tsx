import styles from './ProductPage.module.scss';
import classNames from 'classnames';
import { FullItemData } from '../../../entities/FullItemData';
import { Join } from '../../../widgets/join';
import { SortProduct } from '../../../widgets/SortProduct';
import { TypeProductsEnum } from '../../../widgets/SortProduct/ui/SortProduct';
import { Brand } from '../../../widgets/Brand';
export const ProductPage = () => {

  return (
  <div className={classNames(styles.ProductPage)}>
      <FullItemData />
      <SortProduct title='You might also like' typeProducts={TypeProductsEnum.NEW_CERAMICS} />
      <Brand />
      <Join />
  </div>)
};