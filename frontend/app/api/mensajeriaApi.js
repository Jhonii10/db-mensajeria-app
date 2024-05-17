const { default: axios } = require("axios");

const mensajeríaApi = axios.create({
    baseURL: "http://localhost:5000/api",
})


// TODO configurar interceptores
mensajeríaApi.interceptors.request.use(config =>{
    config.headers = {
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config;
})


export default mensajeríaApi;