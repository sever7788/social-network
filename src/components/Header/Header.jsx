import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logo from "../../asseds/images/logo.png";

const Header = (props) => {
  return <header className={s.header}>
    <img src={logo} className={s.logo} />
    {/* <img src="https://demo.hasthemes.com/adda-preview/adda/assets/images/banner/profile-banner.jpg" className={s.banner} /> */}
    <div className={s.loginBlock}>
      {props.isAuth
        ? <div><SubMenu login={props.login} logout={props.logout}/></div>
        : <NavLink to={'/login'}>Login</NavLink>}

    </div>
  </header>
}

const SubMenu = (props) =>{
  return(
    <div class={s.dropdown}>
      <button class={s.dropbtn}>
        {props.login}
        <svg fill="none" height="8" viewBox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" d="M2.16 2.3a.75.75 0 011.05-.14L6 4.3l2.8-2.15a.75.75 0 11.9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3
         3.35a.75.75 0 01-.13-1.05z" fill="currentColor" fill-rule="evenodd">
          </path></svg>
      </button>
      <div class={s.dropdown_content}>
        <a href="#" onClick={props.logout}>Logout</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
}

export default Header;