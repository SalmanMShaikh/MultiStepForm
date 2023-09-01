import React from 'react'
import {  useDispatch, useSelector} from 'react-redux';

function FormSteps() {
    const data = useSelector(state=> state)
  return (
    <div className="personalInfoImageContainer">
    <div className="imageOne">
        <div className="steps-container">

            <div className={`step ${data.step ===1 ? 'active-step': ''}`}>
                <button className="step-button"> 1</button>
            </div>
            <div >step 1<br /> <span className='bold-font'>YOUR INFO</span></div>
        </div>

        <div className="steps-container">

            <div className={`step ${data.step ===2 ? 'active-step': ''}`}>
                <button className="step-button"> 2</button>
            </div>
            <div >step 2<br /> <span className='bold-font'>SELECT PLANS</span></div>
        </div>

        <div className="steps-container">

            <div className={`step ${data.step ===3 ? 'active-step': ''}`}>
                <button className="step-button"> 3</button>
            </div>
            <div >step 3<br /> <span className='bold-font'>ADD-ONS</span></div>
        </div>

        <div className="steps-container">

            <div className={`step ${data.step ===4 ? 'active-step': ''}`}>
                <button className="step-button"> 4</button>
            </div>
            <div >step 4<br /> <span className='bold-font'>SUMMARY</span></div>
        </div>

    </div>
</div>
  )
}

export default FormSteps