import server from "../request";

export const getSkillList = (params) => {
    return server.post("/web/skill/getSkillList").then(response => {
        return response;
    })
}