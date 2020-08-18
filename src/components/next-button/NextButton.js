import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: 0,
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
            return 'Начнем с простого, как у вас со знанием Северной Америки?';
        case 1:
            return 'Вопрос для эрудита - Южная Америка';
        case 2:
            return 'Вопрос по Европе - проще некуда!';
        case 3:
            return 'Вопрос по Азии, надеемся будет просто';
        case 4:
            return 'Соберись! Скоро финиш и вопрос по Африке';
        case 5:
            return 'И так, последний вопрос по Австралии и Океании';
        default:
            return 'Просто вопрос';
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
                disabled={disabledNext}>
                {activeStep === steps.length - 1 ? 'Финиш' : 'Далее'}
            </Button>
        </div>
    );
}
