import App from "./app";
import { signUp, CreatePost, signIn, Home, List, NotFound } from "./pages";

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
        path: "/signIn",
        exact: true,
        component: signIn
      },
      {
        path: "/signUp",
        exact: true,
        component: signUp
      },
      {
        path: "/create-post",
        exact: true,
        component: CreatePost
      },
      {
        path: "/list",
        exact: true,
        component: List
      },
      {
        component: NotFound
      }
    ]
  }
];
