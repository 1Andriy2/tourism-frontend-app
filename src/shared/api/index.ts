import {
    getAuth, createUserWithEmailAndPassword, UserCredential, User,
    signInWithEmailAndPassword, signOut, getIdTokenResult, IdTokenResult, sendPasswordResetEmail, updateEmail, updatePassword
} from "firebase/auth"
import { doc, collection, getDocs, addDoc, getDoc, query, where, orderBy, updateDoc, deleteDoc } from "firebase/firestore"
import { IToursimPlacesCollection } from "../../entities/tourism-card/ui/tourism-card";
import { IUserData } from "../../entities/viewer/store"
import { IFIlterData } from "../../features/tourism-category/model/use-filters";
import { ICoutries } from "../../features/tourism-category/ui/tourism-category";

import { generateCode } from "./utils";
import { firestore } from '../../processes/firebase'

const auth = getAuth();

export const getViewers = async () => {
    const docs = (await firestore.collection("users").get()).docs
    const users = docs.map(doc => doc.data())
    return users
}

export const addViewer = async (data: IUserData) => {
    const docs = (await firestore.collection("users").add(data))
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
    const query = (await firestore.collection("users").where("email", "==", email).get())
    let docID = ''
    query.forEach((doc) => {
        docID = doc.id
    })
    await firestore.collection("users").doc(docID).update({ ...data })
    return (await getViewer()).viewer
}

export const checkCodeManageAccount = async (email: string | undefined, code: number) => {
    const findCode = (await firestore.collection("user-keys").where("user-email", "==", email).where("code", "==", code).limit(1).get())
    if (findCode) {
        // const q = query(collection(firestore, "user-keys"), where("code", "==", code))
        // const querySnapshot = await getDocs(q);
        let docID = ''
        findCode.forEach((doc) => {
            docID = doc.id
        })
        // const user_keys = doc(firestore, "user-keys", docID)
        // await deleteDoc(user_keys)
        await firestore.collection("user-keys").doc(docID).delete()
    }
    return findCode || null
}

export const sendCodeManageAccount = async (email: any) => {
    const code = Number(generateCode(4));
    (await firestore.collection("user-keys").add({ code, date: new Date().toLocaleString(), "user-email": email }))
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
    const docs = (await firestore.collection("countries").get()).docs
    const countries = docs.map(doc => ({ id: doc.id, ...doc.data() }))
    return countries as ICoutries[]
}

export const getTouristPlaces = async (filter: IFIlterData) => {
    const countriesDataIds: string[] = filter.cities.map(c => c.id)
    if (countriesDataIds.length === 0) {
        const docs = (await firestore.collection("tourist-places").where("title", "<=", filter.search).where("title", ">=", filter.search).get()).docs
        const touristPlaces = docs.map(doc => doc.data())
        return touristPlaces as IToursimPlacesCollection[]
    } else {
        const docs = (await firestore.collection("tourist-places").where("country-id", "in", countriesDataIds).get()).docs
        const touristPlaces = docs.map(doc => doc.data())
        return touristPlaces as IToursimPlacesCollection[]
    }
}