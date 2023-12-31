import React, {useState, useEffect} from 'react'
import FormSteps from './formSteps'
import '../stylesheets/index.css'
import {  useDispatch, useSelector} from 'react-redux';

const SelectPlans = () => {

    const dispatch = useDispatch();
    const data = useSelector(state=> state)
    // const [activePlanCard, setActivePlanCard] = useState('arcade')
    const togglePricing = () => {
        dispatch({type: 'changeTimePeriod'})
      };
     

      const goToNext =()=>{
        dispatch({type: 'nextStep'})
        // dispatch({type: 'savePlanType', data: activePlanCard})
    }

    const goBack = ()=>{
        dispatch({type: 'previousStep'})
    }


    return (
        <section className="outerContainer">
            <div className="innerContainer">
                <FormSteps />


                <div className="personalInfoRightSide">

                    <div className="personalInfoHeadingsContainer">
                        <h2 className="personalInfoHeading">Select your plan</h2>
                        <p className="personalInfoDescription">You have the option of monthly or yearly billing</p>
                    </div>

                    <div className="personalInfoForm">
                        <div className="firstRowForm">
                            <div className={`select-plans-card ${data.activePlanCard === 'arcade'? 'active-plan-card': ''}`} onClick={()=>{
                                dispatch({type: 'savePlanType', data: {type: 'arcade', price: '9'}})
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E"/><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"/></g></svg>
                            <div style={{display: 'flex', flexDirection: 'column', lineHeight: '21px'}}>
                            <p className='bold-font'>Arcade</p>
                            <p style={{color: 'grey', fontSize: '15px'}}>{data.isYearly ? '$90/yr' : '$9/mo'}</p>
                           {data.isYearly && <p style={{color: 'black', fontSize:'12px'}}>2 months free</p>}
                            </div>
                            </div>

                            <div className={`select-plans-card ${data.activePlanCard === 'advanced'? 'active-plan-card': ''}`} onClick={()=>{
                                 dispatch({type: 'savePlanType', data: {type: 'advanced', price: '12'}})
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E"/><path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"/></g></svg>
                            <div style={{display: 'flex', flexDirection: 'column', lineHeight: '21px'}}>
                            <p className='bold-font'>Advanced</p>
                            <p style={{color: 'grey', fontSize: '15px'}}>{data.isYearly ? '$120/yr' : '$12/mo'}</p>
                           {data.isYearly && <p style={{color: 'black', fontSize:'12px'}}>2 months free</p>}
                       
                            </div>
                            </div>

                            <div className={`select-plans-card ${data.activePlanCard === 'pro'? 'active-plan-card': ''}`} onClick={()=>{
                                dispatch({type: 'savePlanType', data: {type:'pro', price:'15'}})
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E"/><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"/></g></svg>
                            <div style={{display: 'flex', flexDirection: 'column', lineHeight: '21px'}}>
                            <p className='bold-font'>Pro</p>
                             <p style={{color: 'grey', fontSize: '15px'}}>{data.isYearly ? '$150/yr' : '$15/mo'}</p>
                           {data.isYearly && <p style={{color: 'black', fontSize:'12px'}}>2 months free</p>}
                            </div>
                            </div>

                        </div>

                        <div className="secondRowForm">
                            <div className="buttonbox"> <span id="span" >Monthly</span>
                                <button className={`pricing-button ${data.isYearly ? 'active' : ''}`} onClick={()=>{togglePricing()}}>
                                    <p className="circle"></p>
                                </button>
                                <span>Yearly</span>
                            </div>
                        </div>

                        <div className="buttonContainer">
            <button
              type="submit"
              className="backButton bold-font"
             onClick={goBack}
            >
              Go Back
            </button>
            <button className="buttonOne bold-font" 
            onClick={goToNext}
            >
              Next Step
            </button>
          </div>
                    </div>
                </div>
            </div>
            <div className="buttonContainerMobile">
            <button
              type="submit"
              className="backButtonMobile bold-font"
             onClick={goBack}
            >
              Go Back
            </button>
            <button className="buttonOneMobile bold-font" 
            onClick={goToNext}
            >
              Next Step
            </button>
          </div>
        </section>
    )
}

export default SelectPlans