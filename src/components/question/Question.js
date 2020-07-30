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
        width: 300,
        height: 150,
    },
    controls: {
        display: 'flex',
        alignItems: 'left',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
}));

export default function Question({question}) {
    const classes = useStyles();
    const {image, audio, name} = question
    return (
        <Container>
            <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={process.env.PUBLIC_URL + `/game-data/img/${image}`}
                title="Live from space album cover"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5" align="left">
                        {name}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                        <AudioPlayer
                             src={process.env.PUBLIC_URL + `/game-data/audio/${audio}`}
                             showJumpControls={false}
                             autoPlayAfterSrcChange={false}
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
