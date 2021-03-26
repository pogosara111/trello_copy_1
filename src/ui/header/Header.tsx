import React from 'react';
import s from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {logOutTc} from "../../bll/reducers/reducerAuth";
import {RootStateType} from "../../bll/store";
import {Redirect} from "react-router-dom";

export const Header = () => {

    const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)

    const dispatch = useDispatch();

    const logOut = () => {
     dispatch(logOutTc())
    }
    if(!isAuth){
        return <Redirect to={'/login'}/>
    }


    return (
        <div className={s.header}>
           Header
            <button className={s.buttonLogOut} onClick={logOut}>LogOut</button>
        </div>
    );
};

