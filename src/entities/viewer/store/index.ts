import { atomWithStorage } from "jotai/utils"

export interface IAuthData {
    token: string | null
    data: IUserData | null
}

export interface IUserData {
    name: string
    email: string,
    places: string[]
    password: string
}

export const initAuthData = { token: null, data: null }

export const authStore = atomWithStorage("auth", initAuthData as IAuthData)