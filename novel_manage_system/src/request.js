import axios from "axios";

const server = axios.create({
    baseURL: 'http://localhost:8080'
    , timeout: '1000'
})

server.interceptors.request.use((config)=>{
    return config;
}, (error)=>{
    return Promise.reject(error);
})
server.interceptors.response.use((response)=>{
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default server;