import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import {reducerAuth} from "./reducers/reducerAuth";


let reducers = combineReducers({
    auth: reducerAuth,

});

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export type RootStateType = ReturnType<typeof reducers>;

// @ts-ignore
window.store = store;
