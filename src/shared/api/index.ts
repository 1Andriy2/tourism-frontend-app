import { getAuth, createUserWithEmailAndPassword, UserCredential, User, signInWithEmailAndPassword, signOut, getIdTokenResult, IdTokenResult } from "firebase/auth"
import { collection, getDocs, addDoc, getDoc, doc } from "firebase/firestore"
import { IAuthData, IUserData } from "../../entities/viewer/store"

import { firestore } from '../../processes/firebase'

const auth = getAuth();

export const getViewers = async () => {
    const docs = (await getDocs(collection(firestore, "users"))).docs
    const users = docs.map(doc => doc.data())
    console.log(users)
    return users
}

export const addViewer = async (data: IUserData) => {
    const docs = (await addDoc(collection(firestore, "users"), data))
    return docs
}

export const getViewer = async (): Promise<{ token: IdTokenResult, viewer: any }> => {
    const { currentUser } = auth
    if (!currentUser || currentUser.email === null) throw new Error("Undefined user")
    const token = await getIdTokenResult(currentUser)
    const viewer = await getViewerByEmail(currentUser.email)
    return { token, viewer }
}

export const getViewerByEmail = async (email: string) => {
    const viewers = await getViewers()
    const response = viewers.find(viewer => viewer.email === email)
    return response
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

export const getCoutries = async () => {
    const docs = (await getDocs(collection(firestore, "countries"))).docs
    const countries = docs.map(doc => doc.data())
    console.log(countries) 
    return countries
}

export const getTouristPlaces = async () => {
    const docs = (await getDocs(collection(firestore, "tourist-places"))).docs
    const touristPlaces = docs.map(doc => doc.data())
    console.log(touristPlaces) 
    return touristPlaces
}