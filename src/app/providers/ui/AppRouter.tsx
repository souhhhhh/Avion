import { routeConfig } from '../../../shared/config/routeConfig/routeConfig';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../../../shared/ui/Loader';

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<Suspense fallback={<Loader />}>{element}</Suspense>}
          />
        ))}
      </Routes>
    </div>
  );
};