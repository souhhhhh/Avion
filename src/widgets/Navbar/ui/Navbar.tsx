import React from 'react';
import styles from './Navbar.module.scss';
import classNames from 'classnames';
import { AppLink } from '../../../shared/AppLink';
import { RoutePaths } from '../../../shared/config/routeConfig/routeConfig';
import { Logo } from '../../../shared/Logo';
interface NavbarProps {
  className?: string;
}
export enum AppLinkPaths {
  PLANT_POTS = 'plant-pots',
  CERAMICS = 'ceramics',
  TABLES = 'tables',
  CHAIRS = 'chairs',
  CROCKERY = 'crockery',
  TABLEWARE = 'tableware',
  CUTLERY = 'cutlery',
}
export const Navbar = ({ className }: NavbarProps) => {
  const list = [
    { name: 'Plant pots', path: AppLinkPaths.PLANT_POTS },
    { name: 'Ceramics', path: AppLinkPaths.CERAMICS },
    { name: 'Tables', path: AppLinkPaths.TABLES },
    { name: 'Chairs', path: AppLinkPaths.CHAIRS },
    { name: 'Crockery', path: AppLinkPaths.CROCKERY },
    { name: 'Tableware', path: AppLinkPaths.TABLEWARE },
    { name: 'Cutlery', path: AppLinkPaths.CUTLERY },
  ];
  return (
    <div className={classNames(styles.Navbar)}>
      <div className={styles.logo}>
        <Logo link />
      </div>
      <nav className={styles.navigation}>
        {list.map((el) => (
          <AppLink className={styles.link} key={el.path} to={el.path}>
            {el.name}
          </AppLink>
        ))}
      </nav>
    </div>
  );
};
