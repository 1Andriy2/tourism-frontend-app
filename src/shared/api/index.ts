import { async } from "@firebase/util"
import { getAuth, createUserWithEmailAndPassword, UserCredential, User, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { collection, getDocs, addDoc, DocumentReference, DocumentData, getDoc, query, doc } from "firebase/firestore"
import { IAuthData, IUserData } from "../../entities/viewer/store"

import { firestore } from '../../processes/firebase'

const auth = getAuth();

export const getViewers = async () => {
    const docs = (await getDocs(collection(firestore, "users"))).docs
    const users = docs.map(doc => doc.data())
    return users
}

export const addViewer = async (data: IUserData) => {
    const docs = (await addDoc(collection(firestore, "users"), data))
    return docs
}

export const getViewerByEmail = async (email: string) => {
    const docs = (await getDoc(doc(firestore, "users", email)))
    return docs.data()
}

export const registerViwer = async (data: IUserData): Promise<{ viewer: IUserData, token: string | undefined } | undefined> => {
    const created: UserCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
    const user: User & { accessToken?: string } = created.user
    await addViewer(data)
    return { viewer: data, token: user?.accessToken }
}

export const logInViwer = async (data: Omit<IUserData, "name">): Promise<{ viewer: any, token: string | undefined } | undefined> => {
    const created: UserCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
    const user: User & { accessToken?: string } = created.user
    const viewer = await getViewerByEmail(data.email)
    return { viewer, token: user?.accessToken }
}

export const signOutViewer = async () => {
    return await signOut(auth)
}