import { FC, ReactElement } from "react"
import { QueryClient, QueryClientProvider } from "react-query"

export const queryClient = new QueryClient()

const withReactQuery: (Component: FC<any | undefined>) => (args: any) => ReactElement<any, any> = (Component) => (props) => (
  <QueryClientProvider client={queryClient}>
    <Component {...props} />
  </QueryClientProvider>
)

export default withReactQuery