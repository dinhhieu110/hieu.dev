import { lazy, Suspense } from "react";
import GokuSpaceLoader from "./pages/GokuLoader";

export const PATHS = Object.freeze({
  HOME: "/",
  POSTS: "/posts",
  SINGLE_POST: "/:slug",
  WRITE: "/write",
  LOGIN: "/login",
  REGISTER: "/register",
});

const Home = lazy(() => import("./pages/Home"));
const PostList = lazy(() => import("./pages/PostList"));
const SinglePost = lazy(() => import("./pages/SinglePost"));
const Write = lazy(() => import("./pages/Write"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));


const withSuspense = (Component) => (
  <Suspense fallback={<GokuSpaceLoader />}>
    <Component />
  </Suspense>
);

const routes = [
  {
    path: PATHS.HOME,
    element: withSuspense(Home),
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
];

export default routes;