import {instance} from "./instance";

export const boardsAPI = {
    getBoards(team_id: string) {
        return instance.get(`/boards?team_id=${team_id}`)
    },
    addBoard(team_id: string, title: string) {
        return instance.post(`/boards`, {team_id, title})
    },
    deleteBoard(board_id: string) {
        return instance.delete(`/boards/${board_id}`)
    },
    updateBoard(board_id: string, title: string) {
        return instance.put(`/boards/${board_id}`, {title})
    }
}
