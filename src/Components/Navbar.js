import React from 'react';
import css from '../Styles/Navbar.module.css';
import logo from '../Images/Logo.png';
import insta from '../Images/insta.png';
function Navbar() {
  const redirectExternal = () =>{
    window.location.href = "https://www.instagram.com/healthyfood_vijayawada/";
  }

  return (
    <div className={css.navbar}>
        
        <img className={css.logo} src={logo}/>
        <div className={css.navitems}>
            
            <a onClick={redirectExternal}><p>Visit us on insta</p><img className={css.insta} src={insta} href="www.instagram.com"/></a>
        </div>
    </div>

  )
}

export default Navbar