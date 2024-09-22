import { RouteProps } from 'react-router-dom';
import { MainPage } from '../../../pages/MainPage';
import { ProductPage } from '../../../pages/ProductPage';
import { CartPage } from '../../../pages/CartPage';
import { ProfilePage } from '../../../pages/ProfilePage';
import { LikesPage } from '../../../pages/LikesPage';
import { AboutPage } from '../../../pages/AboutPage';

export enum AppRoutes {
  MAIN = 'main',
  PRODUCT_PAGE = 'productPage',
  CART_PAGE = 'cartPage',
  PROFILE_PAGE = 'profilePage',
  LIKES_PAGE = 'likesPage',
  ABOUT_PAGE = 'aboutPage'
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PRODUCT_PAGE]: 'product/:id',
  [AppRoutes.CART_PAGE]: 'cart',
  [AppRoutes.PROFILE_PAGE]: 'profile',
  [AppRoutes.LIKES_PAGE]: 'likes',
  [AppRoutes.ABOUT_PAGE]: 'about'

};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },
  [AppRoutes.PRODUCT_PAGE]: {
    path: RoutePaths.productPage,
    element: <ProductPage />,
  },
  [AppRoutes.CART_PAGE]:  {
    path: RoutePaths.cartPage,
    element: <CartPage />
  },
  [AppRoutes.PROFILE_PAGE]: { 
    path: RoutePaths.profilePage,
    element: <ProfilePage />
  },
  [AppRoutes.LIKES_PAGE]: { 
    path: RoutePaths.likesPage,
    element: <LikesPage />
  },
  [AppRoutes.ABOUT_PAGE]: { 
    path: RoutePaths.aboutPage,
    element: <AboutPage />
  }
};
