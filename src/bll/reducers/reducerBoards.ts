import {Dispatch} from "redux";
import {boardsAPI} from "../../dal/boardsAPI";

export type ReducerBoards = {
    _id: string,
    team_id: string,
    title: string
}

export type ReducerBoardsType = {
   [key: string]: Array<ReducerBoards>
}

export const InitialState: ReducerBoardsType = {}

export const reducerBoards = (state = InitialState, action: ActionType) =>{

    switch (action.type){

        case "SET_BOARDS":
            return {
                ...state,
                [action.payload.team_id]: action.payload.boards
            }
        default:
            return state
    }
}

export const setBoardsTC = (team_id: string) => async (dispatch: Dispatch) => {
    const res = await boardsAPI.getBoards(team_id)
    dispatch(setBoardsAC(team_id, res.data.data.boards))
}

export const addBoardTC = (team_id: string, title: string) => async (dispatch: Dispatch<any>) => {
    await boardsAPI.addBoard(team_id, title)
    dispatch(setBoardsTC(team_id))
}

export const deleteBoardTC = (board_id: string, team_id: string) => async (dispatch: Dispatch<any>) => {
    await boardsAPI.deleteBoard(board_id)
    dispatch(setBoardsTC(team_id))
}

export const updateBoardTC = (board_id: string, team_id: string, title: string) =>
    async (dispatch: Dispatch<any>) => {
    await boardsAPI.updateBoard(board_id, title)
    dispatch(setBoardsTC(team_id))
}

export const setBoardsAC = (team_id: string, boards: Array<ReducerBoards>) => ({
    type: "SET_BOARDS", payload: {team_id, boards}
} as const)



type setBoardsTypeAC = ReturnType<typeof setBoardsAC>

type ActionType = setBoardsTypeAC
