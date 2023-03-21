import { FC, Suspense, ReactElement, lazy } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Progress } from "@chakra-ui/react"

import { urls } from "../../../shared/config"
import MainLayout from "../../../shared/ui/layout/main-layout"

const HomePage = lazy(() => import("../../../pages/home"))
const AboutPage = lazy(() => import("../../../pages/about"))

const router = createBrowserRouter([
  {
    path: urls.home,
    element: (<MainLayout />),
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
  <Component>
    <Suspense fallback={<Progress size='xs' colorScheme="whatsapp" isIndeterminate />}>
      <RouterProvider router={router} />
    </Suspense>
  </Component>
)

export default withRouter