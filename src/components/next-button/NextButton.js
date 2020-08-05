import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Select campaign settings...';
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown step';
    }
}

export default function NextButton({steps, activeStep, handleNext, disabledNext}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
                disabled={disabledNext}
            >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
        </div>
    );
}
