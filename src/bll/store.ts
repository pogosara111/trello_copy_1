import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import {reducerAuth} from "./reducers/reducerAuth";
import {reducerTeams} from "./reducers/reducerTeams";
import {reducerBoards} from "./reducers/reducerBoards";


let reducers = combineReducers({
    auth: reducerAuth,
    teams: reducerTeams,
    boards: reducerBoards,
    // column: reducerColumn,
    // cards: reducerCards

});

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export type RootStateType = ReturnType<typeof reducers>;

// @ts-ignore
window.store = store;
