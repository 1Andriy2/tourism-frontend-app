import {
    getAuth, createUserWithEmailAndPassword, UserCredential, User,
    signInWithEmailAndPassword, signOut, getIdTokenResult, IdTokenResult, sendPasswordResetEmail, updateEmail, updatePassword
} from "firebase/auth"
import { doc, collection, getDocs, addDoc, getDoc, query, where, orderBy, updateDoc, deleteDoc, limit, startAfter, endBefore } from "firebase/firestore"
import { IToursimPlacesCollection } from "../../entities/tourism-card/ui/tourism-card";
import { IUserData } from "../../entities/viewer/store"
import { IFIlterData } from "../../features/tourism-category/model/use-filters";
import { ICoutries } from "../../features/tourism-category/ui/tourism-category";

import { generateCode } from "./utils";
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

export const getViewer = async (): Promise<{ token: IdTokenResult, viewer: any }> => {
    const { currentUser } = auth
    if (!currentUser || currentUser.email === null) throw new Error("Undefined user")
    const token = await getIdTokenResult(currentUser)
    const viewer = await getViewerByEmail(currentUser.email)
    return { token, viewer }
}

export const editAccount = async (data: IUserData) => {
    const { email, password, ...rest } = data
    if (auth.currentUser && email) {
        await updateEmail(auth.currentUser, email)
    } else if (auth.currentUser && password) {
        await updatePassword(auth.currentUser, password)
    }
    const q = query(collection(firestore, "users"), where("email", "==", email))
    const querySnapshot = await getDocs(q);
    let docID = ''
    querySnapshot.forEach((doc) => {
        docID = doc.id
    })
    const user = doc(firestore, "users", docID)
    await updateDoc(user, { ...data })
    return (await getViewer()).viewer
}

export const checkCodeManageAccount = async (email: string | undefined, code: number) => {
    const q = collection(firestore, "user-keys")
    const userKeys = (await getDocs(q)).docs.map(doc => doc.data())
    const findCode = userKeys.find(uk => uk["user-email"] === email && uk.code === code && new Date(uk.date).getDay() === new Date().getDay())
    if (findCode) {
        const q = query(collection(firestore, "user-keys"), where("code", "==", code))
        const querySnapshot = await getDocs(q);
        let docID = ''
        querySnapshot.forEach((doc) => {
            docID = doc.id
        })
        const user_keys = doc(firestore, "user-keys", docID)
        await deleteDoc(user_keys)
    }
    return findCode || null
}

export const sendCodeManageAccount = async (email: any) => {
    const code = Number(generateCode(4));
    (await addDoc(collection(firestore, "user-keys"), { code, date: new Date().toLocaleString(), "user-email": email }))
    const data = await sendPasswordResetEmail(auth, email, { url: `http://localhost:5173/?code=${code}` })
    return data
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

export const getTouristPlaces = async (filter: IFIlterData, pageParam: any = 0, countPerPage: number = 3) => {
    const countriesDataIds: string[] = filter.cities.map(c => c.id)
    const coll = collection(firestore, "tourist-places")
    if (countriesDataIds.length === 0) {
        const q = query(coll, where("title", ">=", filter.search), orderBy("title", filter.sort), startAfter(pageParam), limit(countPerPage))
        const docs = (await getDocs(q)).docs
        console.log("🚀 ~ file: index.ts:114 ~ getTouristPlaces ~ docs:", docs)
        const touristPlaces = docs.map(doc => doc.data())
        return { data: touristPlaces as IToursimPlacesCollection[], nextCursor: docs.length === countPerPage ? docs[docs.length - 1] : null, }
    } else {
        const q = query(coll, where("country-id", "in", countriesDataIds), where("title", ">=", filter.search), orderBy("title", filter.sort), startAfter(pageParam), limit(countPerPage))
        const docs = (await getDocs(q)).docs
        const touristPlaces = docs.map(doc => doc.data())
        return { data: touristPlaces as IToursimPlacesCollection[], nextCursor: docs.length === countPerPage ? docs[docs.length - 1] : null, }
    }
}