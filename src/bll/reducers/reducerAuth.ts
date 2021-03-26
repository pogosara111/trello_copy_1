import {Dispatch} from "redux";
import {authAPI} from "../../dal/authAPI";

type loginType ={
    email: string,
    id: string
    isAuth: boolean

}

const InitialState: loginType = {
    email:"",
    id:"",
    isAuth: false

}

export const reducerAuth = (state = InitialState, action: ActionType) => {
    switch (action.type){
        case "SET_IS_AUTH":
        case "SET_LOGIN_DATA":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const loginTC = (values: any) => async (dispatch: Dispatch) => {
    try{
        await authAPI.login(values)
        dispatch(setIsAuthAC(true))

    }
    catch (e){
        console.log(e)
    }
}

export const authMeTC = () => async (dispatch: Dispatch) => {
    try{
       const res = await authAPI.auth()
        dispatch(setIsAuthAC(true))
        dispatch(setLoginDataAC(res.data.data.email, res.data.data._id))

    }
    catch (e){
        console.log(e)
    }
}

export const logOutTc = () => async (dispatch: Dispatch) => {
    try{
        await authAPI.logOut()
        dispatch(setIsAuthAC(false))
    }
    catch (e){
        console.log(e)
    }
}

export const registerTC = (values: any) => async (dispatch: Dispatch) => {
    try{
        await authAPI.register(values)

    }
    catch (e){
        console.log(e)
    }
}

export const setLoginDataAC = (email: string, id: string) => ({
    type: "SET_LOGIN_DATA", payload: {email, id}
} as const)
export const setIsAuthAC = (isAuth: boolean) => ({
    type: "SET_IS_AUTH", payload: {isAuth}
} as const)



type setLoginDataTypeAC = ReturnType<typeof setLoginDataAC>
type setIsAuthTypeAC = ReturnType<typeof setIsAuthAC>


type ActionType = setLoginDataTypeAC | setIsAuthTypeAC
