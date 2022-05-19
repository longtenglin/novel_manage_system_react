import axios from "axios";

const server = axios.create({
    baseURL: 'http://localhost:8888'
    , timeout: '1000'
})

server.interceptors.request.use((config)=>{
    return config;
}, (error)=>{
    return Promise.reject(error);
})
server.interceptors.response.use((response)=>{
    const data =  response.data;
    if (data["code"] === "E0000"){
        alert(data["message"])
    }
    return data["result"]
}, function (error) {
    return Promise.reject(error);
});

export default server;