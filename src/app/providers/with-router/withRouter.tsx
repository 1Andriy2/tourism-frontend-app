import { Component, FC, Suspense, ReactElement, lazy } from "react"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import { urls } from "../../../shared/config"

const HomePage = lazy(() => import("../../../pages/home"))
const AboutPage = lazy(() => import("../../../pages/about"))

const router = createBrowserRouter([
  {
    path: urls.home,
    element: <HomePage />,
  },
  {
    path: urls.about,
    element: <AboutPage />,
  },
  {
    path: "auth",
    element: (
      <p>
        Side
        <Outlet />
      </p>
    ),
    children: [
      {
        path: "login",
        element: (
          <p>Login</p>
        )
      },
      {
        path: "register",
        element: (
          <p>Register</p>
        )
      },
    ]
  },
]);

const withRouter: (component: FC<any | undefined>) => () => ReactElement<any, any> = (component) => () => (
  <Suspense fallback={<p>Loading...</p>}>
    <RouterProvider router={router} />
  </Suspense>
)

export default withRouter