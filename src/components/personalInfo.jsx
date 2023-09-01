import React,{useEffect, useState} from 'react'
import FormSteps from './formSteps'
import '../stylesheets/personalInfo.css'
import {  useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import config from '../config'
import { useCookies } from 'react-cookie';

function PersonalInfo() {
    const [cookies, setCookie] = useCookies();
    const dispatch = useDispatch();
    const data = useSelector(state=> state)

    useEffect(()=>{
        console.log('what,,,,,,,,,,,,,,,,,,,,,,,,,,,', config.apiUrl)
       axios.get(`${config.apiUrl}/generateToken`).then((res)=>{
        console.log(res,'<<<<<<<<<<<<<<<<<<<<yoho')
        if(res.data.status === 200){
            setCookie('auth', res.data.token, { path: '/' });
        }
       }).catch((err)=>{
           console.log(err,'<<<<<<<<<<<<<')
       })
    },[])
    
    const [isError, setIsError] = useState({
        name: false,
       
        email: false,
        phone: false
    })



    const goToNext =()=>{

        if(!isError.name && data.name.length > 0  && !isError.email && data.email.length > 0 && !isError.phone && data.phone.length > 0){
            let dataToSend = {
                name: data.name,
                email: data.email,
                phone: data.phone
            }
            let token = cookies['auth']
         
            dispatch({type: 'nextStep'})
            axios.post(`${config.apiUrl}/save_data`, dataToSend, {
                headers:{
                    Authorization : `Bearer ${token}`
                }
            })
        }

    }


    const checkDetails = (e) => {
        let value = e.target.value;
        switch (e.target.id) {
          case "nameInput":
            
            if (!/\d/.test(value) && value.length < 120 && /[A-Za-z_]/.test(value)) {
              setIsError((previousValues) => {
                return {
                  ...previousValues,
                    name: false
                };
              });
            } else {
              setIsError((previousValues) => {
                return {
                  ...previousValues,
                  name: true
                };
              });
            }
           dispatch({type: 'setName', data: value})
            break;
          
    
          case "emailInput":
            if (/\S+@\S+\.\S+/.test(value) && value.length < 120) {
              setIsError((previousValues) => {
                return {
                  ...previousValues,
                  email: false
                };
              });
            } else {
              setIsError((previousValues) => {
                return {
                  ...previousValues,
                  email: true
                };
              });
            }
            dispatch({type: 'setEmail', data: value})
            break;
    
          case "phoneInput":
            if (value.length ===10 && /^\+\d{1,}$/.test(value)) {
              setIsError((previousValues) => {
                return {
                  phone: false,
                };
              });
            } else {
              setIsError((previousValues) => {
                return {
                  ...previousValues,
                    phone: true
                };
              });
            }
            dispatch({type: 'setPhone', data: value})
            break;
    
          default:
            console.log("no id present in signup.js");
            break;
        }
      };

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
                               
                                placeholder='e.g. Stephen King'
                                    type="text"
                                    className={
                                        isError.name
                                            ? "redBorder inputField"
                                            : "inputField"
                                    }
                                    id="nameInput"
                                    value={data && data.name ? data.name :''}
                                    onChange={checkDetails}
                                    required="required"
                                />
                                {isError.name && (
                                    <p className="error">Name should contain alphabets only </p>
                                )}
                            </label>

                        </div>

                        <div className="secondRowForm">
                            <label className="flexColumn">
                                Email-Address
                                <input
                                placeholder='e.g. stephenking@lorem.com'
                                    type="email"
                                    className={
                                        isError.email
                                            ? "redBorder inputField"
                                            : "inputField"
                                    }
                                    id="emailInput"
                                    value={data && data.email ? data.email :''}
                                    onChange={checkDetails}
                                    required="required"
                                />
                                {isError.email && (
                                    <p className="error">Please provide valid email id</p>
                                )}
                            </label>
                        </div>

                        <label className="flexColumn address">
                            Phone Number
                            <input
                                type="text"
                                className={
                                    isError.phone
                                        ? "redBorder inputFieldAddress"
                                        : "inputFieldAddress"
                                }
                                id="phoneInput"
                                value={data && data.phone ? data.phone :''}
                                  onChange={checkDetails}
                                required="required"
                            />
                            {isError.phone && (
                                <p className="error">Phone number should be 10 digits preceded with +</p>
                            )}
                        </label>

                        <button className="buttonOne" onClick={()=>{goToNext()}}>
                            Next Step
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default PersonalInfo