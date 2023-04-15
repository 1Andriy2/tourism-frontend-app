import { Fragment, ReactNode } from 'react'

import withProviders from './providers'
import useFetchViewerQuery from '../features/auth/model/use-fetch-viewer-query'

function App({ children }: { children: ReactNode }) {
  useFetchViewerQuery()

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default withProviders(App)

