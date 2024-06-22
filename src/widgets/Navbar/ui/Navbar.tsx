import React from 'react';
import styles from './Navbar.module.scss';
import classNames from 'classnames';
import { AppLink } from '../../../shared/AppLink';
import { Logo } from '../../../shared/Logo';
import { Search } from '../../../features/Search';
import { Navigation } from '../../../entities/Navigation';
interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.Navbar)}>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.logo}>
        <Logo link />
      </div>
      {/* <Navigation /> */}
    </div>
  );
};
