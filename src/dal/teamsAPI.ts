import {instance} from "./instance";

export const teamsAPI = {
    getTeams(user_id: string) {
        return instance.get(`/team/my-teams?user_id=${user_id}`)
    },
    addTeam(user_id: string, name: string, description: string) {
        return instance.post(`/team`, {user_id, name, description})
    },
    updateTeam(team_id: string, name: string){
        return instance.put(`/team/${team_id}`, {name} )
    },
    deleteTeam(team_id: string){
        return instance.delete(`/team/${team_id}`)
    }
}
