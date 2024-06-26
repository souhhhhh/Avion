import styles from './MainPage.module.scss';
import classNames from 'classnames';
import { Hero } from '../../../widgets/Hero';
import productImg from '../../../widgets/ProductList/assets/Parent.jpg';
import { Brand } from '../../../widgets/Brand';
import { ProductList } from '../../../widgets/ProductList';
import { Join } from '../../../widgets/Join';

interface MainPageProps {
  className?: string;
}
const testData = [
  {
    price: 250,
    title: 'The Dandy chair',
    id: 1,
    img: productImg,
  },
  {
    price: 250,
    title: 'The Dandy chair',
    id: 2,
    img: productImg,
  },
  {
    price: 250,
    title: 'The Dandy chair',
    id: 3,
    img: productImg,
  },
  {
    price: 250,
    title: 'The Dandy chair',
    id: 4,
    img: productImg,
  },
];
export const MainPage = ({ className }: MainPageProps) => {
  return (
    <div className={classNames(styles.MainPage)}>
      <Hero />
      <Brand />
      <ProductList title="New ceramics" data={testData} />
      <ProductList title="Our popular products" data={testData} />
      <Join />
    </div>
  );
};
