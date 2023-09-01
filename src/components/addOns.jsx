import React, {useState} from 'react'
import FormSteps from './formSteps'
import '../stylesheets/addOns.css'
import {  useDispatch} from 'react-redux';

function AddOns() {
    const dispatch = useDispatch();
    const [select, setSelect] = useState({
        online: false,
        larger: false,
        customizable: false
    })
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
                            <div className={`addons-container m-b-20 ${select.online ? 'addons-container-active': ''}`} onClick={()=>{
                                setSelect((pre)=>{
                                    return{
                                        ...pre,
                                        online: !pre.online
                                    }
                                })
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className={`addons-icon ${select.online ? 'addons-icon-active': ''}`}>
                                    {select.online && <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/></svg>}
                                    </div>
                                    <div className='bold-font' style={{ marginLeft: '20px' }}>Online service<br /> <span className='regular-font' sttyle={{ fontSize: '13px', color: 'grey' }}>Access to multiplayer games</span></div>
                                </div>

                                <div style={{ fontSize: '14px', color: 'grey' }}>
                                    +$1/mo
                                </div>
                            </div>

                            <div className={`addons-container m-b-20 ${select.larger ? 'addons-container-active': ''}`} onClick={()=>{
                                setSelect((pre)=>{
                                    return{
                                        ...pre,
                                        larger: !pre.larger
                                    }
                                })
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div  className={`addons-icon ${select.larger ? 'addons-icon-active': ''}`}>
                                    {select.larger && <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/></svg>}
                                    </div>
                                    <div className='bold-font' style={{ marginLeft: '20px' }}>Larger Storage<br /> <span className='regular-font' sttyle={{ fontSize: '13px', color: 'grey' }}>Extra 1TB of cloud save</span></div>
                                </div>

                                <div style={{ fontSize: '14px', color: 'grey' }}>
                                    +$1/mo
                                </div>
                            </div>

                            <div className={`addons-container m-b-20 ${select.customizable ? 'addons-container-active': ''}`} onClick={()=>{
                                setSelect((pre)=>{
                                    return{
                                        ...pre,
                                        customizable: !pre.customizable
                                    }
                                })
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className={`addons-icon ${select.customizable ? 'addons-icon-active': ''}`}>
                                    {select.customizable && <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/></svg>}
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
                            {/* <button className="buttonOne bold-font"
                             onClick={goToNext}
                            >
                                Next Step
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddOns