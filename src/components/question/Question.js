import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        boxShadow: 'none',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'left',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
}));

export default function Question() {
    const classes = useStyles();
    return (
        <Container>
            <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image="https://material-ui.com/static/images/cards/live-from-space.jpg"
                title="Live from space album cover"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5" align="left">
                        Live From Space
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                        <AudioPlayer
                             src="https://birds-quiz.netlify.app/static/media/win.a1e9e8b6.mp3"
                             showJumpControls={false}
                             layout="horizontal"
                             customAdditionalControls={[]}
                             onPlay={e => console.log("onPlay")}
                        />
                </div>
            </div>
        </Card>
        </Container>
    );
}
