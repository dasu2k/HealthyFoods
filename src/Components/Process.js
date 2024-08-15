import React from 'react'
import css from '../Styles/Process.module.css';
import plan from '../Images/check-list.png';
import contact from '../Images/phone-call.png';
import details from '../Images/details.png';
function Process() {
  return (
    <div className={css.process}>
        <h2>The Process</h2>
        <div className={css.processItem}>
            <p>Contact us by calling us on the number given above.</p>
            <img src={contact}/>
        </div>
        <div className={css.processItem}>
            <img src={details}/>
            <p>Give us your details and we will ask you a few questions about your lifestyle and body parameters.</p>
        </div>
        <div className={css.processItem}>
            <p>Then we will provide you a personalized meal plan , 6 days a week along with a workout plan.</p>
            <img src={plan}/>
        </div>
    </div>
  )
}

export default Process