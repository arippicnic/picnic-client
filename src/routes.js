import App from "./app";
import { Home, List, Login, NotFound } from "./pages";

export default [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/list",
        exact: true,
        component: List
      },
      {
        path: "/login",
        exact: true,
        component: Login
      },
      {
        component: NotFound
      }
    ]
  }
];
