import { atomWithStorage } from "jotai/utils"

export interface IAuthData {
    token: string | null
    data: IUserData | null
}

export interface IUserData {
    id: number
    name: string
    email: string,
    password: string
}

export const initAuthData = { token: null, data: null }

export const authStore = atomWithStorage("auth", initAuthData as IAuthData)