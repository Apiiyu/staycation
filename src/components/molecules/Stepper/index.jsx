import React, { useState } from 'react'
import propTypes from 'prop-types'

export default function Stepper(props) {
  const { steps, initialSteps } = props
  const stepsKeys = Object.keys(steps)
  const [currentStep, setCurrentStep] = useState(stepsKeys.indexOf(initialSteps) > -1 ? initialSteps : stepsKeys[0])
  const totalStep = stepsKeys.length
  const indexStep = stepsKeys.indexOf(currentStep)

  const prevStep = () => {
    if(+indexStep > 0) setCurrentStep(stepsKeys[indexStep - 1])
  }

  const nextStep = () => {
    if(+indexStep < totalStep) setCurrentStep(stepsKeys[indexStep + 1])
    console.log({currentStep})
  }


  return (
    <>
      {props.children(prevStep, nextStep, currentStep, steps)}
    </>
  )
}

Stepper.propTypes = {
  data: propTypes.object.isRequired,
  initialStep: propTypes.string
}

export { default as Numbering } from "./Numbering";
export { default as Meta } from "./Meta";
export { default as Controller } from "./Controller";
export { default as Content } from "./Content";

