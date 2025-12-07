import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import Login from "../model/login"
import Register from "../model/register";

const http = axios.create({
    baseURL: "http://localhost:5045/token",
})

export function LoginApi(data: Login) {
    return http.post<Login, AxiosResponse<any>>('/login', data);
}
export function RegisterApi(data: Register) {
    return http.post<Register>('/register', data);
}

export const axios_config: AxiosRequestConfig = {
    headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json',
        Authorization: "Bearer " + localStorage.getItem("token")
    }
}
