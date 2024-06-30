import styles from './ProductPage.module.scss';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { testData } from '../../../app/data/data';
import { ProductCardProps } from '../../../entities/ProductCard/ui/ProductCard';
interface ProductPageProps {
  className?: string;
}

export const ProductPage = ({ className }: ProductPageProps) => {
  const params = useParams();
  const items: ProductCardProps[] = testData.filter((item) => item.id === params.id);
  return <div className={classNames(styles.ProductPage)}>{items.map((item) => item.price)}</div>;
};
