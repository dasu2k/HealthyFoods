import React from 'react';
import css from '../Styles/Navbar.module.css';

function Navbar() {
  return (
    <div className={css.navbar}>
        <h1 className={css.logo}>Healthy Foods</h1>
        
        <div className={css.navitems}>
            <a href='google.in'>Home</a>
            <a>Testimonials</a>
            <a>Meal Plans</a>
        </div>
    </div>

  )
}

export default Navbar