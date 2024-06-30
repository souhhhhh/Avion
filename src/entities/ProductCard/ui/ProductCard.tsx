import React from 'react';
import styles from './ProductCard.module.scss';
import classNames from 'classnames';
import { AppLink } from '../../../shared/ui/AppLink';
import { useNavigate, useNavigation } from 'react-router-dom';
export interface ProductCardProps {
  img: string;
  title: string;
  price: number;
  id: string;
}

export const ProductCard = ({ img, title, price, id }: ProductCardProps) => {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <div onClick={() => navigate(`products/${id}`)} className={classNames(styles.ProductCard)}>
      <div className={styles.img}>
        <img src={img} alt="" />
      </div>

      <div className={styles.title}>{title}</div>
      <div className={styles.price}>£{price}</div>
    </div>
  );
};
