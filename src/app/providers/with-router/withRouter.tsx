import { FC, Suspense, ReactElement, lazy } from "react"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"

import { Layout } from "../../../shared/ui"
import { urls } from "../../../shared/config"

const HomePage = lazy(() => import("../../../pages/home"))
const AboutPage = lazy(() => import("../../../pages/about"))

const router = createBrowserRouter([
  {
    path: urls.home,
    element: (
        <Layout>
          <Layout.Header />
          <Layout.Content>
            <Outlet />
          </Layout.Content>
        </Layout>
    ),
    children: [
      {
        path: urls.home,
        element: <HomePage />,
      },
      {
        path: urls.about,
        element: <AboutPage />,
      },
    ]
  },
  {
    path: "auth",
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

const withRouter: (Component: FC<any | undefined>) => () => ReactElement<any, any> = (Component) => () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Component>
      <RouterProvider router={router} />
    </Component>
  </Suspense>
)

export default withRouter