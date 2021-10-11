import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import { SocketContext } from '../SocketContext'

const useStyles = makeStyles((theme) => ({
    video: {
      maxWidth: '570px',
      [theme.breakpoints.down('xs')]: {
        width: '100% !important',
      },
    },
    gridContainer: {
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    paper: {
      padding: '10px',
      border: '1px solid white',
      margin: '0px 10px 30px 10px',
    },
  }));

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    const classes = useStyles();

    return (
        <Grid container className={classes.gridContainer}>
            {stream && (
                <Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            {name || 'Name'}
                        </Typography>
                        <video playsInline muted ref={myVideo} autoPlay className={classes.video}/>
                    </Grid>
                </Paper>
            )}
            {callAccepted && !callEnded && (
              <Paper className={classes.paper}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>{call.name || 'Name'}</Typography>
                  <video playsInline ref={userVideo} autoPlay className={classes.video} />
                </Grid>
              </Paper>
            )}
        </Grid>
    );
};

export default VideoPlayer;
