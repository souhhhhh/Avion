import React from 'react';
import styles from './ProductCard.module.scss';
import classNames from 'classnames';
export interface ProductCardProps {
  img: string;
  title: string;
  price: number;
}
export const ProductCard = ({ img, title, price }: ProductCardProps) => {
  return (
    <div className={classNames(styles.ProductCard)}>
      <div className={styles.img}>
        <img src={img} alt="" />
      </div>

      <div className={styles.title}>{title}</div>
      <div className={styles.price}>£{price}</div>
    </div>
  );
};
