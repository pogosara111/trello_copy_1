import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import {reducerAuth} from "./reducers/reducerAuth";
import {reducerTeams} from "./reducers/reducerTeams";


let reducers = combineReducers({
    auth: reducerAuth,
    teams: reducerTeams

});

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export type RootStateType = ReturnType<typeof reducers>;

// @ts-ignore
window.store = store;
