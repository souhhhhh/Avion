import styles from './ProductCard.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export interface ProductCardProps {
  img: string;
  title: string;
  price: number;
  id: string;
}

export const ProductCard = ({ img, title, price, id }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className={classNames(styles.ProductCard)}>
      <div className={styles.img}>
        <img src={img} alt="" />
      </div>

      <div className={styles.title}>{title}</div>
      <div className={styles.price}>£{price}</div>
    </Link>
  );
};
// https://i.ibb.co/smMPgdX/Large.png
