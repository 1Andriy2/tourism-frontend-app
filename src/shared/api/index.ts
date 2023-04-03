import {
    getAuth, createUserWithEmailAndPassword, UserCredential, User,
    signInWithEmailAndPassword, signOut, getIdTokenResult, IdTokenResult
} from "firebase/auth"
import { collection, getDocs, addDoc, QueryDocumentSnapshot, QuerySnapshot, query, where } from "firebase/firestore"
import { IToursimPlacesCollection } from "../../entities/tourism-card/ui/tourism-card";
import { IUserData } from "../../entities/viewer/store"
import { IFIlterData } from "../../features/tourism-category/model/use-filters";
import { ICoutries } from "../../features/tourism-category/ui/tourism-category";

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
    const countries = docs.map(doc => ({ id: doc.id, ...doc.data() }))
    return countries as ICoutries[]
}

export const getTouristPlaces = async (filter: IFIlterData) => {
    const countriesDataIds: string[] = filter.cities.map(c => c.id)
    const coll = collection(firestore, "tourist-places")
    if (countriesDataIds.length === 0) {
        const docs = (await getDocs(coll)).docs
        const touristPlaces = docs.map(doc => doc.data())
        return touristPlaces as IToursimPlacesCollection[]
    } else {
        const q = query(coll, where("country-id", "in", countriesDataIds))
        const docs = (await getDocs(q)).docs
        console.log("🚀 ~ file: index.ts:75 ~ getTouristPlaces ~ docs:", docs)
        const touristPlaces = docs.map(doc => doc.data())
        return touristPlaces as IToursimPlacesCollection[]
    }
}