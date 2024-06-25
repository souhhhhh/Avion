import React from 'react';
import styles from './NewProducts.module.scss';
import classNames from 'classnames';
import productImg from '../assets/Parent.jpg';
import { ProductCard } from '../../../entities/ProductCard';
import { Button, ButtonTheme } from '../../../shared/ui/Button/ui/Button';
interface NewProductsProps {
  className?: string;
}
export const NewProducts = ({ className }: NewProductsProps) => {
  return (
    <div className="container">
      <div className={classNames(styles.NewProducts)}>
        <div className={styles.title}>New ceramics</div>
        <div className={styles.items}>
          <div className={styles.block}>
            <ProductCard price={250} title="The Dandy chair" img={productImg} />
          </div>
          <div className={styles.block}>
            <ProductCard price={250} title="The Dandy chair" img={productImg} />
          </div>
          <div className={styles.block}>
            <ProductCard price={250} title="The Dandy chair" img={productImg} />
          </div>
          <div className={styles.block}>
            <ProductCard price={250} title="The Dandy chair" img={productImg} />
          </div>
        </div>
        <div className={styles.button}>
          <Button theme={ButtonTheme.WHITE}>View collection</Button>
        </div>
      </div>
    </div>
  );
};
