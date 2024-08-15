import React from 'react';
import css from '../Styles/Navbar.module.css';
import logo from '../Images/Logo.png';
import insta from '../Images/insta.png';
function Navbar() {
  return (
    <div className={css.navbar}>
        
        <img className={css.logo} src={logo}/>
        <div className={css.navitems}>
            <a><img className={css.insta} src={insta} href="www.instagram.com"/></a>
        </div>
    </div>

  )
}

export default Navbar