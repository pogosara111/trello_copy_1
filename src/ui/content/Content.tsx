import React from 'react';
import {Header} from "../header/Header";
import {NavMenu} from "../navmenu/NavMenu";
import {Footer} from "../footer/Footer";
import s from "./Content.module.css";

export const Content = () => {
    return (
        <div className={s.main}>
                <Header/>
                <NavMenu/>
                <Footer/>
          <div className={s.content}>
              Most popular templates (Content)
          </div>

                {/*<Teams/>*/}

        </div>
    );
};
