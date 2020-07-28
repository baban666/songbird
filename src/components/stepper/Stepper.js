import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Разминка',
            'Воробьиные',
            'Лесные птицы',
            'Певчие птицы',
            'Хищные птицы',
            'Морские птицы'];
}

export default function CustomizedSteppers() {
    const classes = useStyles();
    const steps = getSteps();

    return (
        <div className={classes.root}>
            <Typography className={classes.instructions}>
                Разновидности птиц
            </Typography>
            <Stepper alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}
