import React from 'react';
import { RouteProps } from 'react-router-dom';
import { MainPage } from '../../../pages/MainPage';

export enum AppRoutes {
  MAIN = 'main',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },
};
