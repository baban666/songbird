import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    title: {
        marginBottom: theme.spacing(0),
    },
    steps: {
        paddingBottom: theme.spacing(0),
        paddingTop: theme.spacing(1),
    },
    button: {
        marginRight: theme.spacing(1),
    },
}));


export default function StepsAnswer({steps, isStepFailed, activeStep}) {
    const classes = useStyles();
    const [isAlternative, setAlternative] = React.useState(true);
    const [isVertical, setVertical] = React.useState(false);

    window.addEventListener('resize', (e) => {
        const {innerWidth} = e.currentTarget;
        if(innerWidth < 638){
            setAlternative(false);
            setVertical(true);
        } else {
            setAlternative(true);
            setVertical(false);
        }
    });

    window.addEventListener('load', () => {
        if(window.innerWidth < 638){
            setAlternative(false);
            setVertical(true);
        } else {
            setAlternative(true);
            setVertical(false);
        }
    });

    return (
        <div className={classes.root}>
            <Typography  className={classes.title} variant="h6" gutterBottom>
                Угадайте гимн страны по мелодии
            </Typography>
            <Stepper className={classes.steps}
                     alternativeLabel={isAlternative}
                     activeStep={activeStep}
                     orientation={isVertical ? "vertical" : "horizontal"}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepFailed(index)) {
                        labelProps.error = true;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </div>
    );
}
