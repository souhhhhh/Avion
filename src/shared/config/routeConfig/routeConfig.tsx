import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { MainPage } from '../../../pages/MainPage';
import { ProductPage } from '../../../pages/ProductPage';

export enum AppRoutes {
  MAIN = 'main',
  PRODUCT_PAGE = 'productPage',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PRODUCT_PAGE]: 'product/:id',
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
};
