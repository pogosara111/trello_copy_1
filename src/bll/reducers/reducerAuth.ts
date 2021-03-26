
type loginType ={
    userId: number,
}

const InitialState: loginType = {
    userId: null,
}

export const reducerLogin = (state = InitialState, action: ActionType) => {
    switch (action.type){

        default:
            return state;
    }
}



type getUserIdTypeAC = ReturnType<typeof setUserIdAC>

type ActionType = setIsAuthTypeAC |
