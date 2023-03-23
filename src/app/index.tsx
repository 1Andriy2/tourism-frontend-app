import { ReactNode } from 'react'

import withProviders from './providers'

function App({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}

export default withProviders(App)

