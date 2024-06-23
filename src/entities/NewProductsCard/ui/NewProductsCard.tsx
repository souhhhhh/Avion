import React from 'react';
import styles from './NewProductsCard.module.scss';
import classNames from 'classnames';
interface NewProductsProps {
  img: string;
  title: string;
  price: number;
}
export const NewProductsCard = ({ img, title, price }: NewProductsProps) => {
  return (
    <div className={classNames(styles.NewProductsCard)}>
      <div className={styles.img}>
        <img src={img} alt="" />
      </div>

      <div className={styles.title}>{title}</div>
      <div className={styles.price}>£{price}</div>
    </div>
  );
};
