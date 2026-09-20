import { lazy, Suspense } from "react";
import Loader from "./pages/Loader";

export const PATHS = Object.freeze({
  HOME: "/",
  ABOUT_ME: "/about-me",
  POSTS: "/posts",
  SINGLE_POST: "/posts/:slug",
  WRITE: "/write",
  LOGIN: "/login",
  REGISTER: "/register",
  NOT_FOUND: "*"
});
const MainLayOut = lazy(() => import("./layouts/MainLayout"));
const Home = lazy(() => import("./pages/Home"));
const AboutMe = lazy(() => import("./pages/Portfolio"));
const PostList = lazy(() => import("./pages/PostListPage"));
const SinglePost = lazy(() => import("./pages/SinglePost"));
const Write = lazy(() => import("./pages/Write"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));
const NotFound = lazy(() => import("./pages/NotFound"));



const withSuspense = (Component) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

const routes = [
  {
    element: withSuspense(MainLayOut),
    children: [
      {
        path: PATHS.HOME,
        element: withSuspense(Home),
      },
      {
        path: PATHS.ABOUT_ME,
        element: withSuspense(AboutMe),
      },
      {
        path: PATHS.POSTS,
        element: withSuspense(PostList),
      },
      {
        path: PATHS.SINGLE_POST,
        element: withSuspense(SinglePost),
      },
      {
        path: PATHS.WRITE,
        element: withSuspense(Write),
      },
      {
        path: PATHS.LOGIN,
        element: withSuspense(Login),
      },
      {
        path: PATHS.REGISTER,
        element: withSuspense(Register),
      },
      {
        path: PATHS.NOT_FOUND,
        element: withSuspense(NotFound),
      },
    ]
  },

];

export default routes;