import styles from './ProductList.module.scss';
import classNames from 'classnames';
import { ProductCard } from '../../../entities/ProductCard';
import { Button, ButtonTheme } from '../../../shared/ui/Button/ui/Button';

import { testData } from '../../../app/data/data';

interface ProductListProps {
  className?: string;
  title: string;
}

export const ProductList = ({ className, title }: ProductListProps) => {
  return (
    <div className="container">
      <div className={classNames(styles.ProductList)}>
        <div className={styles.title}>{title}</div>
        <div className={styles.items}>
          {testData.map((items) => (
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
