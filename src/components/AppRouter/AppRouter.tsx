import { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { privateRoutes, publicRoutes, RouteNames } from "../../router";

const AppRouter: FC = () => {
  const { isAuth } = useTypedSelector(state => state.auth);

  return isAuth ? (
    <Switch>
      {privateRoutes.map(route => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
          key={route.path}
        />
      ))}
      <Redirect to={RouteNames.JOGS} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(route => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
          key={route.path}
        />
      ))}
      <Redirect to={RouteNames.LOGIN} />
    </Switch>
  );
};

export default AppRouter;
