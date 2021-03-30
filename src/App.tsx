import React, {useEffect} from 'react';
import './App.css';
import {Login} from "./ui/auth/login/Login";
import {Redirect, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./bll/store";
import {authMeTC, registerTC} from "./bll/reducers/reducerAuth";
import { Register } from './ui/auth/register/Register';
import { Content } from './ui/content/Content';
import { Board } from './ui/board/board';

function App() {
    const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch();

    useEffect(()=> {
        !isAuth && dispatch(authMeTC())
    }, [])


    return (
        <div className="App">
            <Route path={'/login'} render={()=><Login/>}/>
            <Route path={'/register'} render={()=><Register/>}/>
            <Route exact path={'/'} render={()=><Content/>}/>
            <Route exact path={'/board/:board_id'} render={()=><Board/>}/>
        </div>
    );
}

export default App;
