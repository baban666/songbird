import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './final-message.css'
import Alert from "@material-ui/lab/Alert/Alert";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 900,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    alert: {
        margin: theme.spacing(2),
    },
    empty: {
        width: 800,
    }
}));

export default function FinalMessage({handleReset, failedSteps, totalPoints, steps}) {
    const classes = useStyles();
    const errors = steps.filter( (item, i) => failedSteps[i])
    console.log('errors', errors.join(', '))
    return (
        <div className={classes.root}>
            <Grid className={classes.paper} container spacing={2}>
                <Grid item>
                    <Card className={classes.paper}>
                        <Alert className={classes.alert} variant="filled" severity="info">
                            Вы прошли викторину и набрали {totalPoints} из 30 возможных баллов
                        </Alert>
                        {false ? (<CardActionArea>
                            <div className="video-responsive">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/IqaRoshKGmU"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    "Касіў Ясь канюшыну" вместо Гимна Беларуси на матче Норвегия - Беларусь.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Ох уж эти устроители мероприятий! То флаги перепутают, то гимн не тот включат. Анекдотическая ситуация произошла на турнире MECA Hockey Game в Норвегии. Перед матчем местной сборной и Белоруссии организаторы случайно включили известную композицию "Касіў Ясь канюшыну" в исполнении "Песняров". Забавно наблюдать, как ничего не подозревающие местные болельщики стоят, слушая "гимн" соперников.
                                </Typography>
                            </CardContent>
                        </CardActionArea>) :
                            (<CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Вы допустили некоторые ошибки в своих ответах
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Подучите гимны следующих континентов: <strong>{errors.join(', ')}</strong> для улучшения результата
                                    </Typography>
                                </CardContent>
                            </CardActionArea>) }
                        <CardActions>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleReset()}
                            >
                                Новая игра
                            </Button>
                            {false ? ( <Button size="small" color="primary" href="https://www.youtube.com/watch?v=IqaRoshKGmU">
                                Перейти на YouTube
                            </Button>) : null}

                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
