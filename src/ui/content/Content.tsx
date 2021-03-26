import React, {useEffect} from 'react';
import {Header} from "../header/Header";
import {NavMenu} from "../navmenu/NavMenu";
import {Footer} from "../footer/Footer";
import s from "./Content.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getTeamsTC} from "../../bll/reducers/reducerTeams";
import {RootStateType} from "../../bll/store";
import { Teams } from '../teams/Teams';

export const Content = () => {


    return (
        <div className={s.main}>
                <Header/>
                <NavMenu/>
                <Footer/>
          <div className={s.content}>
              Most popular templates (Content)
              <Teams/>
          </div>



        </div>
    );
};
