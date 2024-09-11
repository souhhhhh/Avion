import styles from './Navbar.module.scss';
import classNames from 'classnames';
import { Search } from '../../../features/Search';
import { Navigation } from '../../../entities/Navigation';
import cartIcon from '../assets/Shoppingcart.svg';
import userIcon from '../assets/Useravatar.svg';
import { observer } from 'mobx-react';
import { cartStore } from '../../../store/cartStore/cart-store';
import { Logo } from '../../../shared/ui/Logo';
import { Icon } from '../../../shared/ui/Icon';

export const Navbar = observer(() => {
  const { cart } = cartStore
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
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
              <span className='relative bottom-3 text-xs left-9'>{totalItems}</span>
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
});
