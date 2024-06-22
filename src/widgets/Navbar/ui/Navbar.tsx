import styles from './Navbar.module.scss';
import classNames from 'classnames';
import { Logo } from '../../../shared/Logo';
import { Search } from '../../../features/Search';
import { Navigation } from '../../../entities/Navigation';
import { Icon } from '../../../shared/Icon';
import cartIcon from '../assets/Shoppingcart.svg';
import userIcon from '../assets/Useravatar.svg';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.Navbar)}>
      <div className={styles.topContent}>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.logo}>
          <Logo link />
        </div>
        <div className={styles.icon}>
          <Icon svg={cartIcon} />
          <Icon svg={userIcon} />
        </div>
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.navigation}>
          <Navigation />
        </div>
      </div>
    </div>
  );
};
