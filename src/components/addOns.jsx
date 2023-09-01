import React from 'react'
import FormSteps from './formSteps'
import '../stylesheets/addOns.css'
import {  useDispatch} from 'react-redux';

function AddOns() {
    const dispatch = useDispatch();
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
                            <div className="addons-container m-b-20">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="addons-icon">

                                    </div>
                                    <div className='bold-font' style={{ marginLeft: '20px' }}>Online service<br /> <span className='regular-font' sttyle={{ fontSize: '13px', color: 'grey' }}>Access to multiplayer games</span></div>
                                </div>

                                <div style={{ fontSize: '14px', color: 'grey' }}>
                                    +$1/mo
                                </div>
                            </div>

                            <div className="addons-container m-b-20">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="addons-icon">

                                    </div>
                                    <div className='bold-font' style={{ marginLeft: '20px' }}>Larger Storage<br /> <span className='regular-font' sttyle={{ fontSize: '13px', color: 'grey' }}>Extra 1TB of cloud save</span></div>
                                </div>

                                <div style={{ fontSize: '14px', color: 'grey' }}>
                                    +$1/mo
                                </div>
                            </div>

                            <div className="addons-container m-b-20">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="addons-icon">

                                    </div>
                                    <div className='bold-font' style={{ marginLeft: '20px' }}>Customizable Profile<br /> <span className='regular-font' sttyle={{ fontSize: '13px', color: 'grey' }}>custom theme on your profile</span></div>
                                </div>

                                <div style={{ fontSize: '14px', color: 'grey' }}>
                                    +$1/mo
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
        </section>
    )
}

export default AddOns