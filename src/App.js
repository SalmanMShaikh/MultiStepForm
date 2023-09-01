import React, { useEffect } from "react";
import PersonalInfo from "./components/personalInfo";
import SelectPlans from "./components/selectPlans";
import AddOns from "./components/addOns";
import { useSelector } from 'react-redux';

function App() {
  const data = useSelector(state=> state)
  useEffect(()=>{
    console.log(data,'<<<<<<<<<<<<<<<<<<<<<<yo')
  },[data])

  return <>
    {data && data.step === 1 && <PersonalInfo/>}
    {data && data.step === 2  && <SelectPlans/>}
    {data && data.step === 3 && <AddOns/>}
    </>
}

export default App;
