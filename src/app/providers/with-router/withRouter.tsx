import { FC, Suspense, ReactElement, lazy } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Progress } from "@chakra-ui/react"

import { Layout } from "../../../shared/ui"

import { urls } from "../../../shared/config"

const HomePage = lazy(() => import("../../../pages/home"))
const AboutPage = lazy(() => import("../../../pages/about"))
const LogInPage = lazy(() => import("../../../pages/login"))

const router = createBrowserRouter([
  {
    path: urls.home,
    element: (<Layout.MainLayout />),
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
    element: <Layout.AuthLayout />,
    children: [
      {
        path: "login",
        element: <LogInPage />,
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
  <Component>
    <Suspense fallback={<Progress size='xs' colorScheme="whatsapp" isIndeterminate />}>
      <RouterProvider router={router} />
    </Suspense>
  </Component>
)

export default withRouter