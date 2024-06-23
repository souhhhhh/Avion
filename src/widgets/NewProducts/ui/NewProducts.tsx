import React from 'react';
import styles from './NewProducts.module.scss';
import classNames from 'classnames';
import { NewProductsCard } from '../../../entities/NewProductsCard';
import productImg from '../assets/Parent.jpg';
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
            <NewProductsCard price={250} title="The Dandy chair" img={productImg} />
          </div>
          <div className={styles.block}>
            <NewProductsCard price={250} title="The Dandy chair" img={productImg} />
          </div>
          <div className={styles.block}>
            <NewProductsCard price={250} title="The Dandy chair" img={productImg} />
          </div>
          <div className={styles.block}>
            <NewProductsCard price={250} title="The Dandy chair" img={productImg} />
          </div>
        </div>
      </div>
    </div>
  );
};