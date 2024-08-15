import React from 'react'
import css from '../Styles/Process.module.css';
function Process() {
  return (
    <div className={css.process}>
        <h2>The Process</h2>
        <div className={css.processItem}>
            <p>Contact us by clicking calling us on the number above.</p>
        </div>
        <div className={css.processItem}>
            <p>Give us your details and we will ask you a few questions about your lifestyle and body parameters.</p>
        </div>
        <div className={css.processItem}>
            <p>Then we will provide you a personalized meal plan , 6 days a week along with a workout plan.</p>
        </div>
    </div>
  )
}

export default Process