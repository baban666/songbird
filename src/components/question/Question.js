import React,{useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import flag from '../../placeholders/flag.jpg'
import helpers from "../../helpers/helpers";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        boxShadow: 'none',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    content: {
        flex: '1 0 auto',
    },
    container: {
        marginTop: theme.spacing(1),
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

export default function Question({question, showFlagAndName, handListenQuestion}) {
    const classes = useStyles();
    const {image, audio, name} = question;
    const mainFlag = showFlagAndName ? process.env.PUBLIC_URL + `/game-data/img/${image}` : flag;
    const mainName = showFlagAndName ? name : helpers.getStars(helpers.randomInteger(6, 10), '*');
    const player = useRef();
    const audioFunction = () => {
        if(showFlagAndName && player.current){
            player.current.audio.current.pause();
        }
    };

    const [vertical, toggleVertical] = React.useState('horizontal');


    window.addEventListener('resize', (e) => {
        const {innerWidth} = e.currentTarget;
        if(innerWidth < 638){
            toggleVertical('vertical');
        } else {
            toggleVertical('horizontal');
        }
    });

    window.addEventListener('load', () => {
        if(window.innerWidth < 638){
            toggleVertical('vertical');
        } else {
            toggleVertical('horizontal');
        }
    });


    return (
        <Container  className={classes.container}>
            <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={mainFlag}
                title={mainName}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5" align="left">
                        {mainName}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                        <AudioPlayer
                             src={process.env.PUBLIC_URL + `/game-data/audio/${audio}`}
                             showJumpControls={false}
                             autoPlayAfterSrcChange={false}
                             layout={vertical}
                             customAdditionalControls={[]}
                             onPlay={() => handListenQuestion(name)}
                             onListen={audioFunction}
                             ref={player}
                        />
                </div>
            </div>
        </Card>
        </Container>
    );
}
