import {configureStore} from "@reduxjs/toolkit";


const reducer = (state =  {
    changingInput: "",
    array: [],
    indexOfEditedElement: null,
    toggleCounter: 0,
    add: 0,
    edit: 0,
    delete: 0

}
, action) => {
    
    switch (action.type) {
        case "addToLocalStorage":
               if(state.changingInput){
                if(localStorage.getItem("todos")){
                    let array = JSON.parse(localStorage.getItem("todos"))
                    array.push({value:state.changingInput,checked:false , id: Math.random()});
                    localStorage.setItem("todos", JSON.stringify(array))
          
                }else{
                    localStorage.setItem("todos",JSON.stringify([{value:state.changingInput,checked:false, id: Math.random()}]));
                }
               }else{
                   alert("please fill the field")
               }
            return{
                ...state,
                add: state.add+1,
            
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
