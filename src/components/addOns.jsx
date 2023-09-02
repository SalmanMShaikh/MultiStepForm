import React, {useState} from 'react'
import FormSteps from './formSteps'
import '../stylesheets/addOns.css'
import {  useDispatch, useSelector} from 'react-redux';

function AddOns() {
    const data = useSelector(state=> state)
    const dispatch = useDispatch();
    // const [select, setSelect] = useState({
    //     online: false,
    //     larger: false,
    //     customizable: false
    // })
    const goToNext =()=>{
        dispatch({type: 'nextStep'})
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
                        <h2 className="personalInfoHeading">Pick add-ons</h2>
                        <p className="personalInfoDescription">Add-ons help enhance your gaming experience</p>
                    </div>

                    <div className="personalInfoForm">
                        <div className="firstRowFormAddon">
                            <div className={`addons-container m-b-20 ${data.online_service ? 'addons-container-active': ''}`} onClick={()=>{
                              dispatch({type: 'setOnlineService'})
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className={`addons-icon ${data.online_service ? 'addons-icon-active': ''}`}>
                                    {data.online_service && <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/></svg>}
                                    </div>
                                    <div className='bold-font' style={{ marginLeft: '20px' }}>Online service<br /> <span className='regular-font' style={{ fontSize: '13px', color: 'grey' }}>Access to multiplayer games</span></div>
                                </div>

                                <div style={{ fontSize: '14px', color: 'grey' }}>
                                    {data.isYearly? '+$10/yr':'+$1/mo'}
                                </div>
                            </div>

                            <div className={`addons-container m-b-20 ${data.larger_storage ? 'addons-container-active': ''}`} onClick={()=>{
                               dispatch({type: 'setLargerStorage'})
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div  className={`addons-icon ${data.larger_storage ? 'addons-icon-active': ''}`}>
                                    {data.larger_storage && <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/></svg>}
                                    </div>
                                    <div className='bold-font' style={{ marginLeft: '20px' }}>Larger Storage<br /> <span className='regular-font' style={{ fontSize: '13px', color: 'grey' }}>Extra 1TB of cloud save</span></div>
                                </div>

                                <div style={{ fontSize: '14px', color: 'grey' }}>
                                {data.isYearly? '+$20/yr':'+$2/mo'}
                                </div>
                            </div>

                            <div className={`addons-container m-b-20 ${data.customizable_profile ? 'addons-container-active': ''}`} onClick={()=>{
                           dispatch({type: 'setCustomizableProfile'})
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className={`addons-icon ${data.customizable_profile ? 'addons-icon-active': ''}`}>
                                    {data.customizable_profile && <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/></svg>}
                                    </div>
                                    <div className='bold-font' style={{ marginLeft: '20px' }}>Customizable Profile<br /> <span className='regular-font' style={{ fontSize: '13px', color: 'grey' }}>custom theme on your profile</span></div>
                                </div>

                                <div style={{ fontSize: '14px', color: 'grey' }}>
                                {data.isYearly? '+$20/yr':'+$2/mo'}
                                </div>
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

export default AddOns