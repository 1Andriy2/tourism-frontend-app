import { getAuth, createUserWithEmailAndPassword, UserCredential, User } from "firebase/auth"
import { collection, getDocs, addDoc, DocumentReference, DocumentData } from "firebase/firestore"
import { IAuthData, IUserData } from "../../entities/viewer/store"

import { firestore } from '../../processes/firebase'

export const getViewers = async () => {
    const docs = (await getDocs(collection(firestore, "users"))).docs
    const users = docs.map(doc => doc.data())
    return users
}

export const addViewer = async (data: IUserData) => {
    const docs = (await addDoc(collection(firestore, "users"), data))
    return docs
}

export const registerViwer = async (data: IUserData): Promise<{ viewer: IUserData, token: string | undefined } | undefined> => {
    const auth = getAuth();
    const created: UserCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
    const user: User & { accessToken?: string } = created.user
    await addViewer(data)
    return { viewer: data, token: user?.accessToken }
}