import React, { useEffect } from "react";
import PersonalInfo from "./components/personalInfo";
import SelectPlans from "./components/selectPlans";
import AddOns from "./components/addOns";
import { useSelector } from 'react-redux';
import Summary from "./components/Summary";

function App() {
  const data = useSelector(state=> state)
  useEffect(()=>{
    console.log(data,'<<<<<<<<<<<<<<<<<<<<<<yo')
  },[data])

  return <>
    {data && data.step === 1 && <PersonalInfo/>}
    {data && data.step === 2  && <SelectPlans/>}
    {data && data.step === 3 && <AddOns/>}
    {data && data.step === 4 && <Summary/>}
    </>
}

export default App;
