import { createContext, useState } from "react";

export const StepFormContext = createContext(null);

export default function StepFormContextProvaider({ children }) {
  const [step, setStep] = useState(1);
  const [isValidForm, setIsValidForm] = useState(false);
  const [form, , setFormData] = useState([]);

  function prevStepIncrement() {
    setStep((prev) => prev + 1);
  }

  function prevStepDecrement() {
    setStep((prev) => prev - 1);
  }

  function defaultStep() {
    setStep(1);
  }

  const value = {
    step,
    setStep,
    isValidForm,
    form,
    setFormData,
    setIsValidForm,
    prevStepIncrement,
    prevStepDecrement,
    defaultStep,
  };

  return (
    <StepFormContext.Provider value={value}>
      {children}
    </StepFormContext.Provider>
  );
}
