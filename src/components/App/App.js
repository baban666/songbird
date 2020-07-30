import React from 'react';
import './App.css';
import Header from "../header";
import StepsAnswer from "../stepper";
import Main from "../main";
import getSteps from "../../data/steps";
import gameData from "../../data/game-data";
import helpers from "../../helpers/helpers";

function App() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [failedSteps, setFailedSteps] = React.useState(new Array(6).fill(false));
    const [disabledItems, setDisabledItems] = React.useState(new Array(6).fill(false));
    const [errors, setErrors] = React.useState(new Array(6).fill('inherit'));
    const [desc, setDescription]  = React.useState(gameData[activeStep][2]);
    const [questionsNumber, setQuestionsNumber] = React.useState(helpers.randomNumber(5));
    const [points, setPoints] = React.useState(5);
    const [totalPoints, setTotalPoints] = React.useState(0);
    const [disabledNext, setDisabledNext] = React.useState(true);
    const steps = getSteps();

    const question = gameData[activeStep][questionsNumber]

    const isStepFailed = (step) => {
        return failedSteps[step];
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setTotalPoints((prevTotalPoints) => prevTotalPoints + points);
        setQuestionsNumber(helpers.randomNumber(5))
        setErrors(new Array(6).fill('inherit'))
        setFailedSteps((prevFailedSteps) => pastFailedSteps(prevFailedSteps, activeStep));
        setDisabledNext(true)
        setDisabledItems(new Array(6).fill(false))
    };

    const handleReset = () => {
        setActiveStep(0);
        setFailedSteps([]);
    };

    const checkAnswer = (questionId, answerId) => {
        console.log('errors', errors)

        if (questionId === answerId) {
            console.log('correct')
            setDescription(gameData[activeStep][answerId])
            setErrors((prevErrors) => pastCorrect(prevErrors, answerId));
            setDisabledItems(new Array(6).fill(true))
            setDisabledNext(false)
        } else {
            setDescription(gameData[activeStep][answerId])
            console.log('error', points)
            setPoints((prevPoints) => prevPoints - 1);
            setErrors((prevErrors) => pastError(prevErrors, answerId));
            setDisabledItems((prevDisabled) => pastDisabled(prevDisabled, answerId))
        }
    };

    const pastError = (arr, idx) => {
        return [
            ...arr.slice(0, idx),
            'error',
            ...arr.slice(idx + 1)
        ];
    }
    const pastCorrect = (arr, idx) => {
        return [
            ...arr.slice(0, idx),
            'primary',
            ...arr.slice(idx + 1)
        ];
    }
    const pastFailedSteps = (arr, idx) => {
        return [
            ...arr.slice(0, idx),
            (errors.some((item) => item === 'error')),
            ...arr.slice(idx + 1)
        ];
    }
    const pastDisabled = (arr, idx) => {
        return [
            ...arr.slice(0, idx),
            true,
            ...arr.slice(idx + 1)
        ];
    }

    return (
            <div className="App">
              <header>
                  <Header totalPoints={totalPoints} />
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
                  question={question}
                  gameData={gameData[activeStep]}
                  checkAnswer={checkAnswer}
                  desc={desc}
                  errors={errors}
                  disabledItems={disabledItems}
                  disabledNext={disabledNext}
              />
            </div>
          );
}

export default App;
