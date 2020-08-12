import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Answers from "../answers/Answers";
import Description from "../description";
import Question from "../question";
import NextButton from "../next-button";
import {Box} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: 'unset',
    },
    paperNext: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: 'unset',
    },
    grid: {
        padding: theme.spacing(0),
        width: '100%',
    },
    topPaper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: '10px',
        boxShadow: 'unset',
    },
}));

export default function Main({steps,
                                 activeStep,
                                 handleNext,
                                 question,
                                 checkAnswer,
                                 gameData,
                                 desc,
                                 errors,
                                 disabledItems,
                                 disabledNext,
                                 showFlagAndName,
                                 showDescription,
                                 handListenQuestion,
                                 showDesc}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container m={300}>
                <Grid item xs={12}>
                    <Paper className={classes.topPaper}>
                        <Question
                            question={question}
                            showFlagAndName={showFlagAndName}
                            handListenQuestion={handListenQuestion}/>
                    </Paper>
                </Grid>
                <Grid container spacing={3}>
                    <Grid  className={classes.grid} item md={12} lg={6}>
                        <Box boxShadow={3}>
                        <Paper className={classes.paper}>
                            <Answers
                                question={question}
                                checkAnswer={checkAnswer}
                                gameData={gameData}
                                errors={errors}
                                disabledItems={disabledItems}
                                disabledNext={disabledNext}
                                showDescription={showDescription}/>
                        </Paper>
                        </Box>
                    </Grid>
                    <Grid item md={12} lg={6}>
                         <Description desc={desc} showDesc={showDesc} />
                    </Grid>
                    <Grid className={classes.grid} item xs={12}>
                        <Paper className={classes.paperNext}>
                             <NextButton
                                 steps={steps}
                                 activeStep={activeStep}
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
