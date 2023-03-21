import axios from 'axios'

axios.defaults.baseURL = ""

export function setToken(token: string):void{
    axios.defaults.headers.Authorization = `Bearer ${token}`
}

export function removeToken(){
    axios.defaults.headers.Authorization = null
}