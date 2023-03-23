import { FC, Suspense, ReactElement } from "react"
import { RouterProvider } from "react-router-dom"
import { Progress } from "@chakra-ui/react"

import router from "../../../processes/routes"

const withRouter: (Component: FC<any | undefined>) => () => ReactElement<any, any> = (Component) => () => (
  <Component>
    <Suspense fallback={<Progress size='xs' colorScheme="whatsapp" isIndeterminate />}>
      <RouterProvider router={router} />
    </Suspense>
  </Component>
)

export default withRouter