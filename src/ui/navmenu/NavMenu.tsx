import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./NavMenu.module.css";

export const NavMenu = () => {
    return (
        <div className={s.nav}>
              NavMenu
            <NavLink to={'/boards'}>Boards</NavLink>
            <NavLink to={'/templates'}>Templates</NavLink>
            <NavLink to={'/home'}>Home</NavLink>
        </div>
    );
};
