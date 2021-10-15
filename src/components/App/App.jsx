import { useEffect, useContext } from "react";
import { Redirect, Switch } from "react-router";

import { Layout, PrivateRoute, PublicRoute } from "..";
import { DarkModeContext } from "../../context/DarkModeContext";

// import styles from './App.module.css';

import routes from "../../config/routes";
import urls from "../../config/urls";

export default function App() {
  const { mode } = useContext(DarkModeContext);

  useEffect(() => {
    document.body.className = localStorage.getItem("DarkMode");
  }, [mode]);

  return (
    <Layout>
      <Switch>
        {routes.map(({ component: Component, ...route }) =>
          route.private ? (
            <PrivateRoute key={route.path} {...route}>
              <Component />
            </PrivateRoute>
          ) : (
            <PublicRoute key={route.path} {...route}>
              <Component />
            </PublicRoute>
          )
        )}

        <Redirect to={urls.notFound} />
      </Switch>
    </Layout>
  );
}
