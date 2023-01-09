import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyles from "~frontend/source/components/global-styles/global-styles";
import routes, {
  Route as RouteType,
} from "~frontend/source/constants/routes/routes";

const AppWrapper: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<></>}>
        <Routes>
          {routes.map(
            (
              { path, component: Component }: RouteType,
              index: number,
            ): JSX.Element => {
              return (
                <Route
                  path={path}
                  key={`route-${index}`}
                  element={<Component />}
                />
              );
            },
          )}
        </Routes>
      </Suspense>
    </>
  );
};

export default AppWrapper;
