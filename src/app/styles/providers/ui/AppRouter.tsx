import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from '../../../../shared/config/routeConfig/routeConfig';

export const AppRouter = () => {
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
