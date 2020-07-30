import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Answers from "../answers/Answers";
import Description from "../description";
import Question from "../question";
import NextButton from "../next-button";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '30px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    topPaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: '40px',
    },
}));

export default function Main({steps, activeStep, handleReset, handleNext, question, checkAnswer, gameData, desc, errors, disabledItems, disabledNext}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container m={300}>
                <Grid item xs={12}>
                    <Paper className={classes.topPaper}>
                        <Question question={question} />
                    </Paper>
                </Grid>
                <Grid container spacing={5}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Answers question={question} checkAnswer={checkAnswer} gameData={gameData} errors={errors} disabledItems={disabledItems}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                         <Description desc={desc} />
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                             <NextButton
                                 steps={steps}
                                 activeStep={activeStep}
                                 handleReset={handleReset}
                                 handleNext={handleNext}
                                 disabledNext={disabledNext}
                             />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
