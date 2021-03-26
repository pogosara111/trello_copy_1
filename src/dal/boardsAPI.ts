import {instance} from "./instance";

export const boardsAPI = {
    getBoards(team_id: string) {
        return instance.get(`/boards?team_id=${team_id}`)
    }
}
