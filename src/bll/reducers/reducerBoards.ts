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

export const InitialState: ReducerBoardsType = {

}

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

export const setBoardsAC = (team_id: string, boards: Array<ReducerBoards>) => ({
    type: "SET_BOARDS", payload: {team_id, boards}
} as const)


type setBoardsTypeAC = ReturnType<typeof setBoardsAC>


type ActionType = setBoardsTypeAC
