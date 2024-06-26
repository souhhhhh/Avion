import styles from './Navbar.module.scss';
import classNames from 'classnames';
import { Search } from '../../../features/Search';
import { Navigation } from '../../../entities/Navigation';
import cartIcon from '../assets/Shoppingcart.svg';
import userIcon from '../assets/Useravatar.svg';
import { Icon } from '../../../shared/ui/Icon';
import { Logo } from '../../../shared/ui/Logo';

export const Navbar = () => {
  return (
    <header>
      <div className={classNames(styles.Navbar)}>
        <div className={styles.items}>
          <div className={styles.topContent}>
            <div className={styles.search}>
              <Search />
            </div>
            <div className={styles.logo}>
              <Logo link />
            </div>
            <div className={styles.icon}>
              <Icon link path="/cart" className={styles.icon__link} svg={cartIcon} />
              <Icon link path="/profile" className={styles.icon__link} svg={userIcon} />
            </div>
          </div>
          <div className={styles.bottomContent}>
            <div className={styles.navigation}>
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
