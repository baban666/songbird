import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 130,
    },
});

export default function Description() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                        Lizard (across all)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                        across all continents except Antarctica
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <AudioPlayer
                    src="https://birds-quiz.netlify.app/static/media/win.a1e9e8b6.mp3"
                    showJumpControls={false}
                    layout="horizontal"
                    customAdditionalControls={[]}
                    onPlay={e => console.log("onPlay")}
                />
            </CardActions>
        </Card>
    );
}
