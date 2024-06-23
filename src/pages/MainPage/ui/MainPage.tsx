import React from 'react';
import styles from './MainPage.module.scss';
import classNames from 'classnames';
import { Hero } from '../../../widgets/Hero';
import { NewProducts } from '../../../widgets/NewProducts';

interface MainPageProps {
  className?: string;
}

export const MainPage = ({ className }: MainPageProps) => {
  return (
    <div className={classNames(styles.MainPage)}>
      <Hero />
      <NewProducts />
    </div>
  );
};
