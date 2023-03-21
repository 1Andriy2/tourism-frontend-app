import { useAtom } from "jotai"
import { authStore, initAuthData, IAuthData } from "../store"

export function useViewerAtom() {
    const [auth, setAuth] = useAtom(authStore)
    
    const setAuthData = (data: IAuthData) => setAuth(data) 

    const removeAuthData = () => setAuth(initAuthData) 
   
    // async function login() {
        
    // }

    // async function register() {
        
    // }
    
    return {
        isAuthenticated: !!auth.token,
        authData: auth,
        setAuthData,
        removeAuthData
    }
}