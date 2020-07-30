import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SelectedListItem({gameData, question, checkAnswer, errors, disabledItems}) {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(null);

    const handleListItemClick = (event, index) => {
        const {id} = question
        checkAnswer(id, index)
        setSelectedIndex(index);
    };

    const isError = (errors, index) => {
        return errors[index]
    };
    const isDisabled = (items, index) => {
        return items[index]
    };


    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                {gameData.map((item) => {
                    return (
                        <div key={item.id}>
                        <ListItem
                            button
                            selected={selectedIndex === item.id}
                            disabled={isDisabled(disabledItems, item.id)}
                            onClick={(event) => handleListItemClick(event, item.id)}
                        >
                            <ListItemIcon>
                                <FiberManualRecordIcon color={isError(errors, item.id)} />
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                        <Divider />
                        </div>
                    )
                })}
            </List>
        </div>
    );
}
