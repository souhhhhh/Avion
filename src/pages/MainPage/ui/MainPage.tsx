import React from 'react';
import styles from './MainPage.module.scss';
import classNames from 'classnames';

interface MainPageProps {
  className?: string;
}
export const MainPage = ({ className }: MainPageProps) => {
  return <div className={classNames(styles.MainPage)}>main content</div>;
};
