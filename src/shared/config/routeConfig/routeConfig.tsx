import { RouteProps } from 'react-router-dom';
import { MainPage } from '../../../pages/MainPage';
import { ProductPage } from '../../../pages/ProductPage';
import { CartPage } from '../../../pages/CartPage';

export enum AppRoutes {
  MAIN = 'main',
  PRODUCT_PAGE = 'productPage',
  CART_PAGE = 'cartPage'
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PRODUCT_PAGE]: 'product/:id',
  [AppRoutes.CART_PAGE]: 'cart'
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
  }
};
