import React from 'react';
import styles from './ProductList.module.scss';
import classNames from 'classnames';
import productImg from '../assets/Parent.jpg';
import { ProductCard } from '../../../entities/ProductCard';
import { Button, ButtonTheme } from '../../../shared/ui/Button/ui/Button';
import { ProductCardProps } from '../../../entities/ProductCard/ui/ProductCard';

interface ProductListProps {
  className?: string;
  title: string;
  data: ProductCardProps[];
}

export const ProductList = ({ className, title, data }: ProductListProps) => {
  return (
    <div className="container">
      <div className={classNames(styles.ProductList)}>
        <div className={styles.title}>{title}</div>
        <div className={styles.items}>
          {data.map((items) => (
            <div className={styles.block}>
              <ProductCard {...items} />
            </div>
          ))}
        </div>
        <div className={styles.button}>
          <Button theme={ButtonTheme.WHITE}>View collection</Button>
        </div>
      </div>
    </div>
  );
};
