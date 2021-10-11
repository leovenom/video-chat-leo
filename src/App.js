import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

const useStyles = makeStyles((theme) => ({
    appBar: {
        margin: '0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        width: '100%',
        padding: '6px',
        color: 'white',
        boxShadow:'none',
    
        [theme.breakpoints.down('xs')]: {
          width: '100%',
        },
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      },
    }));

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="transparent">
                <Typography variant="h6" style={{ marginLeft: '8px' }}>Video Chat</Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
    );
};

export default App;