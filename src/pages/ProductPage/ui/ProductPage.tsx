import classNames from 'classnames';

import { Join } from '../../../widgets/join';
import { SortProduct } from '../../../widgets/SortProduct';
import { TypeProductsEnum } from '../../../widgets/SortProduct/ui/SortProduct';
import { Brand } from '../../../widgets/Brand';
import styles from './ProductPage.module.scss';
import { FullItemData } from '../../../entities/CardItem/ui/FullItemData';
import { useEffect } from 'react';

export const ProductPage = () => {
  useEffect(() => { 



    window.scrollTo(0, 0);
  }, [])
  return (
  <div className={classNames(styles.ProductPage)}>
      <FullItemData />
      <SortProduct title='You might also like' typeProducts={TypeProductsEnum.NEW_CERAMICS} />
      <Brand />
      <Join />
  </div>)
};