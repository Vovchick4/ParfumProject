import { lazy } from "react";

import urls from "./urls";

const routes = [
  {
    path: urls.home,
    exact: true,
    component: lazy(() => import("../pages/Home")),
    private: false,
    restricted: false,
  },
  {
    path: urls.notFound,
    exact: true,
    component: lazy(() => import("../pages/NotFound")),
    private: false,
    restricted: false,
  },
  {
    path: urls.about,
    exact: true,
    component: lazy(() => import("../pages/About")),
    private: false,
    restricted: false,
  },
  {
    path: urls.incredients,
    exact: true,
    component: lazy(() => import("../pages/Incredients")),
    private: false,
    restricted: false,
  },
  {
    path: urls.product,
    exact: true,
    component: lazy(() => import("../pages/Product")),
    private: false,
    restricted: false,
  },
  {
    path: urls.contact,
    exact: true,
    component: lazy(() => import("../pages/Contact")),
    private: false,
    restricted: false,
  },
  {
    path: urls.login,
    exact: true,
    component: lazy(() => import("../pages/Login")),
    private: false,
    restricted: true,
  },
  {
    path: urls.signUp,
    exact: true,
    component: lazy(() => import("../pages/SignUp")),
    private: false,
    restricted: true,
  },
  {
    path: urls.user,
    exact: true,
    component: lazy(() => import("../pages/User")),
    private: true,
    restricted: false,
  },
];

export default routes;
