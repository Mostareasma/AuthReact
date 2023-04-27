import axios from 'axios'


export const axiosInstance = axios.create({baseURL: 'http://localhost:8080'})

axiosInstance.interceptors.request.use(function (config) {
    const jwt = localStorage.getItem("Access_token")
    if (jwt){
        config.headers.Authorization=jwt
    }
    return config
});