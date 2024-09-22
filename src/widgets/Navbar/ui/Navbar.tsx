import styles from './Navbar.module.scss';
import classNames from 'classnames';
import { Navigation } from '../../../features/Navigation';
import { observer } from 'mobx-react';
import { Logo } from '../../../shared/ui/Logo';
import { Icon } from '../../../shared/ui/Icon';
import { cartStore } from '../../../shared/store/cartStore/cart-store';
import { usePhotos } from '../../../shared/lib/hooks/usePhotos';
import { RoutePaths } from '../../../shared/config/routeConfig/routeConfig';
export const Navbar = observer(() => {
  const { cart } = cartStore
  const { LikesIcon, CartIcon, ProfileIcon } = usePhotos()
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <header>
      <div className={classNames(styles.Navbar)}>
        <div className={styles.items}>
          <div className={styles.topContent}>
            <div className={styles.search}>
              <Icon link path={RoutePaths.likesPage} svg={LikesIcon} />
            </div>
            <div className={styles.logo}>
              <Logo link />
            </div>
            <div className={styles.icon}>
              <span className='relative bottom-3 text-xs left-9'>{totalItems}</span>
              <Icon link path={RoutePaths.cartPage} className={styles.icon__link} svg={CartIcon} />
              <Icon link path={RoutePaths.profilePage} className={styles.icon__link} svg={ProfileIcon} />
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
