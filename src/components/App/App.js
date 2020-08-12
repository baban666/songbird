import React from 'react';
import './App.css';
import Header from "../header";
import StepsAnswer from "../stepper";
import Main from "../main";
import getSteps from "../../data/steps";
import gameData from "../../data/game-data";
import helpers from "../../helpers/helpers";
import FinalMessage from "../final-message";

function App() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [failedSteps, setFailedSteps] = React.useState(new Array(6).fill(false));
    const [disabledItems, setDisabledItems] = React.useState(new Array(6).fill(true));
    const [errors, setErrors] = React.useState(new Array(6).fill('inherit'));
    const [desc, setDescription]  = React.useState({});
    const [questionsNumber, setQuestionsNumber] = React.useState(helpers.randomNumber(5));
    const [points, setPoints] = React.useState(5);
    const [totalPoints, setTotalPoints] = React.useState(0);
    const [disabledNext, setDisabledNext] = React.useState(true);
    const [showFlagAndName, setShowFlagAndName] = React.useState(false);
    const [showDesc, setShowDesc] = React.useState(false);
    const [showReset, setShowReset] = React.useState(false);

    const steps = getSteps();
    const question = gameData[activeStep >=6 ? 0 : activeStep][questionsNumber];

    const isStepFailed = (step) => {
        return failedSteps[step];
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep >= 6 ? 0 : prevActiveStep + 1);
        setQuestionsNumber(helpers.randomNumber(6));
        setErrors(new Array(6).fill('inherit'));
        setFailedSteps((prevFailedSteps) => pastValue(prevFailedSteps, activeStep, (errors.some((item) => item === 'error'))));
        setDisabledNext(true);
        setDisabledItems(new Array(6).fill(true));
        setShowFlagAndName(false);
        setShowDesc(false);
        setPoints(5);
        resetFailedStepsAndPoint()
    };

    const handleReset = () => {
        setShowReset(false);
        setActiveStep((prevActiveStep) => prevActiveStep >= 6 ? 0 : prevActiveStep + 1);
        setFailedSteps( () => new Array(6).fill(false));
        setTotalPoints(0);
        setQuestionsNumber(helpers.randomNumber(6));
        setErrors(new Array(6).fill('inherit'));
        setDisabledNext(true);
        setDisabledItems(new Array(6).fill(true));
        setShowFlagAndName(false);
        setShowDesc(false);
        setPoints(5);
    };

    const handListenQuestion = (name) => {
        setDisabledItems(() => new Array(6).fill(false));
        console.log('Правильный ответ:', name);
    };

    const checkAnswer = (questionId, answerId) => {
        setShowDesc(true);
        if (questionId === answerId) {
            setDescription(gameData[activeStep][answerId]);
            setErrors((prevErrors) => pastValue(prevErrors, answerId, 'primary'));
            setDisabledItems(new Array(6).fill(false));
            setDisabledNext(false);
            setShowFlagAndName(true);
            setTotalPoints((prevTotalPoints) => prevTotalPoints + points);
            helpers.playCorrect();
        } else {
            setDescription(gameData[activeStep][answerId]);
            setPoints((prevPoints) => prevPoints - 1);
            setErrors((prevErrors) => pastValue(prevErrors, answerId, 'error'));
            setDisabledItems((prevDisabled) => pastValue(prevDisabled, answerId, true));
            helpers.playError();
        }
    };

    const pastValue = (arr, idx, value) => {
        return [
            ...arr.slice(0, idx),
            value,
            ...arr.slice(idx + 1)
        ];
    };

    const showDescription = (questionId, answerId) => {
        setDescription(gameData[activeStep][answerId])
    };

    const resetFailedStepsAndPoint = () => {
        if (activeStep >= 5) {
            setShowReset(true)
        }
    };
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
                {showReset
                    ? (<FinalMessage
                        handleReset={handleReset}
                        failedSteps={failedSteps}
                        totalPoints={totalPoints}
                        steps={steps} /> )
                    : (<Main
                        steps={steps}
                        activeStep={activeStep}
                        handleNext={handleNext}
                        question={question}
                        gameData={gameData[activeStep]}
                        checkAnswer={checkAnswer}
                        desc={desc}
                        errors={errors}
                        disabledItems={disabledItems}
                        disabledNext={disabledNext}
                        showFlagAndName={showFlagAndName}
                        showDescription={showDescription}
                        handListenQuestion={handListenQuestion}
                        showDesc={showDesc}
                        showReset={showReset}
                    />
                ) }
            </div>
          );
}

export default App;
