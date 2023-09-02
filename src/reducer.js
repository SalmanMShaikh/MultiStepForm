import {configureStore} from "@reduxjs/toolkit";


const reducer = (state =  {
    step: 1,
    name: '',
    email: '',
    phone: '',
    isYearly: false,
    price: 9,
    // options: [],
    activePlanCard: 'arcade',
    online_service: false,
    larger_storage: false,
    customizable_profile: false,
}
, action) => {
    
    switch (action.type) {
        case "nextStep":
            return{
                ...state,
                step: state.step+1,
            
            } 
        case 'previousStep':
            return{
                ...state,
                step: state.step - 1
            }
       case 'setName':
        return{
            ...state,
            name: action.data
        }
        case 'setEmail':
            return{
                ...state,
                email: action.data
            }
        case 'setPhone':
        return{
            ...state,
            phone: action.data
        }   
        case 'changeTimePeriod':
            return{
                ...state,
                isYearly:!state.isYearly
            }
        case 'savePlanType':
            return {
                ...state,
                activePlanCard: action.data.type,
                price: action.data.price
            }
        case 'setOnlineService':
            return {
                ...state,
                online_service: !state.online_service
            }
        case 'setLargerStorage':
                return {
                    ...state,
                    larger_storage: !state.larger_storage
                }
        case 'setCustomizableProfile':
                return {
                    ...state,
                    customizable_profile: !state.customizable_profile
                }

        case 'resetStep':
            return{
                step: 1
            }
        default: 
            return state
    }
}


const store = configureStore({reducer});
store.subscribe(()=>{
    console.log(store.getState())
})

export {store}
