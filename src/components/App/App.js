import React from 'react';
import './App.css';
import Header from "../header";
import StepsAnswer from "../stepper";
import Main from "../main";
import getSteps from "../../data/steps";

function App() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [failedSteps, setFailedSteps] = React.useState([]);
    const [questions, setQuestions] = React.useState([]);
    const [points, setPoints] = React.useState(5);
    const steps = getSteps();

    const isStepFailed = (step) => {
        return failedSteps.find((item) => item === step);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setFailedSteps((prevFailedSteps) => [...prevFailedSteps, activeStep % 2 === 0 ? activeStep : null]);
    };

    const handleReset = () => {
        setActiveStep(0);
        setFailedSteps([]);
    };

    return (
            <div className="App">
              <header>
                  <Header />
                  <StepsAnswer
                      steps={steps}
                      isStepFailed={isStepFailed}
                      activeStep={activeStep}
                  />
              </header>
              <Main
                  steps={steps}
                  activeStep={activeStep}
                  handleReset={handleReset}
                  handleNext={handleNext}
              />
            </div>
          );
}

export default App;
