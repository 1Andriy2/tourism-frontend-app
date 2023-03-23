import { collection, getDocs } from "firebase/firestore";

import { firestore } from '../../processes/firebase';

export const getViewers = async () => {
    const docs = (await getDocs(collection(firestore, "users"))).docs
    const users = docs.map(doc => doc.data())
    return users
}