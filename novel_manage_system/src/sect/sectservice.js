import server from "../request";

export const getSectList = (params) => {
    return server.post("/web/sect/getSectList").then(result => {
        return result;
    })
}