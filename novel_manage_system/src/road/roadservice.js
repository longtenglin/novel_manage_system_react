import server from "../request";

export const getRoadList = (params) => {
    return server.post("/web/road/getRoadList", params).then(result => {
        return result;
    })
}