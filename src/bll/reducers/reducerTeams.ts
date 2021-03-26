import {Dispatch} from "redux";
import {teamsAPI} from "../../dal/teamsAPI";

export type TeamType = {
    _id: string,
    name: string,
    description: string
}

export type ReducerTeams = {
    teams: Array<TeamType>,
    teamName: string,
    teamDescription: string

}

const InitialState: ReducerTeams = {
    teams: [],
    teamName: "",
    teamDescription: "",
}

export const reducerTeams = (state = InitialState, action: ActionType ) => {

    switch (action.type){

        case "SET_TEAM_DESCRIPTION":
        case "SET_TEAM_NAME":
        case "UPDATE_TEAM":
        case "DELETE_TEAM":
            return {
                ...state,
                ...action.payload
            }
        case "SET_TEAMS":
            return {
                ...state,
                teams: action.payload.teams
            }

        default:
            return state
    }
}

export const getTeamsTC = (user_id: string) => async (dispatch: Dispatch) => {
    const res = await teamsAPI.getTeams(user_id)
    dispatch(setTeamsAC(res.data.data.teams))
}

export const addTeamTC = (user_id: string, name:string, description: string) => async (dispatch: Dispatch<any>) => {
    await teamsAPI.addTeam(user_id, name, description)
    dispatch(getTeamsTC(user_id))
}

export const updateTeamTC = (team_id: string, name: string) => async (dispatch: Dispatch) => {
    await teamsAPI.updateTeam(team_id, name)
}

export const deleteTeamTC = (user_id: string, team_id: string) => async (dispatch: Dispatch<any>) => {
    await teamsAPI.deleteTeam(team_id)
    dispatch(getTeamsTC(user_id))
}

export const setTeamsAC = (teams: Array<TeamType>) => ({
    type: "SET_TEAMS", payload: {teams}
}as const)

export const setTeamNameAC = (teamName: string) => ({
    type: "SET_TEAM_NAME", payload: {teamName}
}as const)

export const setTeamDescriptionAC = (teamDescription: string) => ({
    type: "SET_TEAM_DESCRIPTION", payload: {teamDescription}
}as const)

export const updateTeamAC = (name: string) => ({
    type: "UPDATE_TEAM", payload: {name}
} as const)

export const deleteTeamAC = (team_id: string) => ({
    type: "DELETE_TEAM", payload: [team_id]
} as const)


type setTeamsTypeAC = ReturnType<typeof setTeamsAC>
type setTeamNameTypeAC = ReturnType<typeof setTeamNameAC>
type setTeamDescriptionTypeAC = ReturnType<typeof setTeamDescriptionAC>
type updateTeamTypeAC = ReturnType<typeof updateTeamAC>
type deleteTeamTypeAC = ReturnType<typeof deleteTeamAC>

type ActionType = setTeamsTypeAC | setTeamNameTypeAC | setTeamDescriptionTypeAC
| updateTeamTypeAC | deleteTeamTypeAC
