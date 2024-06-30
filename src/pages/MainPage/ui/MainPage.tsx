import styles from './MainPage.module.scss';
import classNames from 'classnames';
import { Hero } from '../../../widgets/Hero';
import { Brand } from '../../../widgets/Brand';
import { ProductList } from '../../../widgets/ProductList';
import { Join } from '../../../widgets/Join';

interface MainPageProps {
  className?: string;
}

export const MainPage = ({ className }: MainPageProps) => {
  return (
    <div className={classNames(styles.MainPage)}>
      <Hero />
      <Brand />
      <ProductList title="New ceramics" />
      <ProductList title="Our popular products" />
      <Join />
    </div>
  );
};
