import server from "../request";

export const getTreasureList = (params) => {
    return server.post('/web/treasure/treasureList', params).then(response => {
        return response;
    })
}