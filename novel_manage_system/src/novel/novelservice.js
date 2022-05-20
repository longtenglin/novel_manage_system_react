import server from "../request";

export const getNovelList = (params) => {
    return server.post('/web/novel/getNovelList', params).then(result => {
        return result;
    })
}