import {configureStore} from "@reduxjs/toolkit";


const reducer = (state =  {
    step: 1,
    name: '',
    email: '',
    phone: '',
    indexOfEditedElement: null,
    toggleCounter: 0,
    add: 0,
    edit: 0,
    delete: 0

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
        default: 
            return state
    }
}


const store = configureStore({reducer});
store.subscribe(()=>{
    console.log(store.getState())
})

export {store}
