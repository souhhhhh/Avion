import { routeConfig } from '../../../shared/config/routeConfig/routeConfig';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
interface AppRouterProps {
  className?: string;
}
export const AppRouter = ({ className }: AppRouterProps) => {
  return (
    <div>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<Suspense fallback="Loading...">{element}</Suspense>}
          />
        ))}
      </Routes>
    </div>
  );
};
