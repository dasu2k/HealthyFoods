import React from 'react';
import css from '../Styles/Question.module.css';
import { InstagramEmbed } from 'react-social-media-embed';

function Question() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className={css.question}>
        <h1>Trusted and reviewed by influencers</h1>
        <div className={css.posts}>
          
            <InstagramEmbed url="https://www.instagram.com/p/C-M5VBiRSJ8/" width={328} />
            <InstagramEmbed url="https://www.instagram.com/p/C61GSLrRxAt/" width={328} className={css.secondary}/>
            <InstagramEmbed url="https://www.instagram.com/p/C1RMjbFRdlj/" width={328} className={css.secondary}/>

        </div>
        
        <hr></hr>
        <h1>Why choose us?</h1>
        <p>With an experience of 26 years in food and body training , we bring you nothing but excellence and results . The meals provided are of high quality and taste great which will make them easier to consume daily.</p>
        <hr></hr>
    </div>
  )
}

export default Question