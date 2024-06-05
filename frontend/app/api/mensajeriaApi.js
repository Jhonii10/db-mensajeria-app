import Cookies from "js-cookie";

const { default: axios } = require("axios");

const mensajeríaApi = axios.create({
    baseURL: "http://localhost:5000/api",
})


mensajeríaApi.interceptors.request.use(config =>{
    config.headers = {
        ...config.headers,
         'x-token':Cookies.get('token')
    }
    return config;
})


export default mensajeríaApi;