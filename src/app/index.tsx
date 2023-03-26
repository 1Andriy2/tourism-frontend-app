import { ReactNode } from 'react'

import withProviders from './providers'
import useFetchViewer from '../features/auth/model/use-fetch-viewer'

function App({ children }: { children: ReactNode }) {
  useFetchViewer()

  return (
    <>
      {children}
    </>
  )
}

export default withProviders(App)

