import { collection, getDocs, addDoc } from "firebase/firestore";
import { IAuthData, IUserData } from "../../entities/viewer/store";

import { firestore } from '../../processes/firebase';

export const getViewers = async () => {
    const docs = (await getDocs(collection(firestore, "users"))).docs
    const users = docs.map(doc => doc.data())
    return users
}

export const addViewer = async (data: IAuthData) => {
    const docs = (await addDoc(collection(firestore, "users"),data))
    return docs
}