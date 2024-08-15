import React from 'react';
import css from '../Styles/Hero.module.css';
import fork from '../Images/diet.png';
import dumbell from '../Images/exercise.png';
import waist from '../Images/slim.png';


function Hero() {
  return (
    <div className={css.hero}>
      <div className={css.content}>
        <div className={css.heading}>
          <h1>Welcome to Healthy Foods</h1>
          <p>Vijayawada</p>
        </div>
        
        <div className={css.offer}>
          <img src={fork}/>
          <p>Get a customized diet.No compromise in taste and quality.</p>
        </div>
        <div className={css.offer}>
          <img src={waist}/>
          <p>Guarenteed  body weight results.</p>
        </div>
        <div className={css.offer}>
          <img src={dumbell}/>
          <p>Customized excercise plan to fit your lifestyle.</p>
        </div>
        <div className={css.phone}>
          <p>Call : 9494121317</p>
        </div>
      </div>
    </div>
  )
}

export default Hero