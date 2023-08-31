import React from 'react'
import FormSteps from './formSteps'
import '../stylesheets/personalInfo.css'

function PersonalInfo({ data }) {
    return (
        <section className="outerContainer">
            <div className="innerContainer">
                <FormSteps/>
              

                <div className="personalInfoRightSide">

                    <div className="personalInfoHeadingsContainer">
                        <h2 className="personalInfoHeading">Personal Info</h2>
                        <p className="personalInfoDescription">Please provide your name, phone number and email address</p>
                    </div>

                    <form className="personalInfoForm">
                        <div className="firstRowForm">
                            <label className="name flexColumn">
                                Name
                                <input
                                    type="text"
                                    className={
                                        data && data.initialValues.firstNameComplete === false
                                            ? "redBorder inputField"
                                            : "inputField"
                                    }
                                    id="firstNameInput"
                                    value={data && data.initialValues.firstNameInput}
                                    // onChange={saveChange}
                                    required="required"
                                />
                                {data && data.initialValues.firstNameComplete === false && (
                                    <p className="error">Name should contain alphabets only </p>
                                )}
                            </label>

                        </div>

                        <div className="secondRowForm">
                            <label className="flexColumn">
                                Email-Address
                                <input
                                    type="email"
                                    className={
                                        data && data.initialValues.emailComplete === false
                                            ? "redBorder inputField"
                                            : "inputField"
                                    }
                                    id="emailInput"
                                    value={data && data.initialValues.emailInput}
                                    // onChange={saveChange}
                                    required="required"
                                />
                                {data && data.initialValues.emailComplete === false && (
                                    <p className="error">Please provide valid email id</p>
                                )}
                            </label>
                        </div>

                        <label className="flexColumn address">
                            Phone Number
                            <input
                                type="text"
                                className={
                                    data && data.initialValues.addressComplete === false
                                        ? "redBorder inputFieldAddress"
                                        : "inputFieldAddress"
                                }
                                id="addressInput"
                                value={data && data.initialValues.addressInput}
                                //   onChange={saveChange}
                                required="required"
                            />
                            {data && data.initialValues.addressComplete === false && (
                                <p className="error">Please fill this field</p>
                            )}
                        </label>

                        <button className="buttonOne" onClick={''}>
                            Next Step
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default PersonalInfo