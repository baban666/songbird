import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 130,
    },
    alert: {
        marginTop: theme.spacing(2),
    },
}));


export default function Description({desc, showDesc}) {
    const classes = useStyles();
    const {name, species, description, image, audio} = desc;
    return (
        <Card className={classes.root}>
            {!showDesc ? (<><CardActionArea>
                <CardContent>
                    <Alert className={classes.alert} variant="filled" severity="info">Нажмите 'Play' и воспроизведите вопрос.</Alert>
                    <Alert className={classes.alert} variant="filled" severity="info">Затем выберите правильный ответ из списка.</Alert>
                </CardContent>
            </CardActionArea>
                </>) : (<><CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={process.env.PUBLIC_URL + `/game-data/img/${image}`}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            {`${name} (${species})`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <AudioPlayer
                src={process.env.PUBLIC_URL + `/game-data/audio/${audio}`}
                showJumpControls={false}
                autoPlayAfterSrcChange={false}
                layout="horizontal"
                customAdditionalControls={[]}
                onPlay={e => console.log("onPlay")}
                />
                </CardActions> </>)}

        </Card>
    );
}
