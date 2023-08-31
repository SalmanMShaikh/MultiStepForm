import React, { useState } from "react";
import PersonalInfo from "./components/personalInfo";
import SelectPlans from "./components/selectPlans";

function App() {
  const [step, setStep] = useState(1);

  return (
    step === 1 && <SelectPlans/>
  );
}

export default App;
