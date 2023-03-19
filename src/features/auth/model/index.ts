import { useAtom } from "jotai"
import { authStore, initAuthData, IAuthData } from "../store"

export default function useAuth() {
    const [auth, setAuth] = useAtom(authStore)
    
    const setAuthData = (data: IAuthData) => setAuth(data) 

    const removeAuthData = () => setAuth(initAuthData) 
   
    // async function login() {
        
    // }

    // async function register() {
        
    // }
    
    return {
        authData: auth,
        setAuthData,
        removeAuthData
    }
}