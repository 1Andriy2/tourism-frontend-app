import { useEffect, ReactNode } from 'react'
import { collection, getDocs } from "firebase/firestore";

import withProviders from './providers'
import { firestore } from '../processes/firebase';

function App({ children }: { children: ReactNode }) {
  useEffect(() => {
    getDocs(collection(firestore, "users"))
      .then((querySnapshot) => {
        console.log(querySnapshot.docs.map(doc => doc.data()))
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      {children}
    </>
  )
}

export default withProviders(App)

