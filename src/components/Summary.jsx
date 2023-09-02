import React, { useEffect, useState } from 'react'
import FormSteps from './formSteps'
import { useDispatch, useSelector } from 'react-redux';
import '../stylesheets/Summary.css'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import config from '../config'

function Summary() {
    const dispatch = useDispatch()
    const [cookies, setCookie] = useCookies();
    const data = useSelector(state => state)
    const [totalPrice, setTotalPrice] = useState(0)


    const goToNext = () => {
        let options = getOptions();
        console.log(data,'<<<<<<<<<<<<<,,,what')
        let yearly= data.isYearly
        if(data.isYearly !== true && data.isYearly !== false){
            yearly = false
        }
        let dataToSend = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            isYearly: yearly,
            planType: data.activePlanCard,
            options,
            totalPrice

        }
        let token = cookies['auth']

        axios.post(`${config.apiUrl}/save_data`, dataToSend, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res)=>{
            if(res.data.status === 200){
                window.alert('data was submitted successfully')
               dispatch({type: 'resetStep'})
            }
        }).catch((err)=>{
            console.log(err)
        })

    }

    useEffect(() => {
        let options = getOptions();
        let totalPrice = 0
        if (options.length > 0) {
            options.forEach((value) => {
                let price = 1
                if (value !== 'Online Service') {
                    price = 2
                }
                totalPrice += price
            })
        }
        if (data.price) {
            totalPrice += parseInt(data.price)
        }
        setTotalPrice(totalPrice)
    }, [])

    const goBack = () => {
        dispatch({ type: 'previousStep' })
    }
    const getOptions = () => {
        let options = []
        if (data.online_service) options.push('Online Service')
        if (data.larger_storage) options.push('Larger Storage')
        if (data.customizable_profile) options.push('Customizable_profile')
        return options
    }

    const renderOptions = () => {
        let options = getOptions()
        let result = <></>
        if (options.length > 0) {
            result = options.map((value) => {
                let price = 1
                if (value !== 'Online Service') {
                    price = 2
                }

                return (
                    <div className='summary-options'>
                        <div>{value}</div>
                        <div>{`+$${price}${data.isYearly ? '0/yr' : '/mo'}`}</div>
                    </div>
                )
            })
        }
        return result
    }
    return (
        <section className="outerContainer">
            <div className="innerContainer">
                <FormSteps />


                <div className="personalInfoRightSide">

                    <div className="personalInfoHeadingsContainer">
                        <h2 className="personalInfoHeading">Finishing up</h2>
                        <p className="personalInfoDescription">Double check everything looks OK before confirming</p>
                    </div>

                    <div className="personalInfoForm">
                        <div className="firstRowFormAddon">
                            <div className='summary-outer-container'>
                                <div className={`summary-container`} >
                                    <div style={{ display: 'flex', alignItems: 'center' }}>

                                        <div className='bold-font'>{data.activePlanCard[0].toUpperCase() +
                                            data.activePlanCard.slice(1)} ({data.isYearly ? 'Yearly' : 'Monthly'})<br />
                                            <div className='regular-font' style={{ color: 'grey', fontSize: '15px', textDecoration: 'underline' }}>Change</div>
                                        </div>
                                    </div>

                                    <div className='bold-font' style={{ fontSize: '16px', color: 'black' }}>

                                        {`$${data.price}${data.isYearly ? '0/yr' : '/mo'}`}
                                    </div>

                                </div>
                                <hr className='summary-hr' />
                                {renderOptions()}

                            </div>
                            <div className='total-summary'>
                                <div >Total ({data.isYearly ? 'per year' : 'per month'})</div>
                                <div className='bold-font' style={{ color: 'rgb(2,41,91)', fontSize: '18px' }}>{`$${totalPrice}${data.isYearly ? '0/yr' : '/mo'}`}</div>
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
                                Confirm
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
             Confirm
            </button>
          </div>
        </section>
    )
}

export default Summary