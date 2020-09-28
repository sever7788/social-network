import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return <header className={s.header}>
    <img src="https://demo.hasthemes.com/adda-preview/adda/assets/images/logo/logo.png" className={s.logo} />
    <img src="https://demo.hasthemes.com/adda-preview/adda/assets/images/banner/profile-banner.jpg" className={s.banner} />
  </header>
}

export default Header;