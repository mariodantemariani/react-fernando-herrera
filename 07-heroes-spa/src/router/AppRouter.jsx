import { Routes, Route } from "react-router-dom";

import { LoginPage } from "../auth";

import { HeroesRoutes } from "../heroes/";
import { PrivateRoute } from "../heroes/routes/PrivateRoute";
import { PublicRoute } from "../heroes/routes/PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        ></Route>

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>

      {/* <Route path="login" element={<LoginPage />} /> */}
      {/* <Route path="/*" element={ <HeroesRoutes />} /> */}
    </>
  );
};
