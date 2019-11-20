import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Routes from './routes'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fade from '@material-ui/core/Fade';



const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  paper: {
    padding:theme.spacing(2),
    backgroundColor: theme.palette.common.white,
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

 
}));

export default function App(){
  const classes = useStyles();
  return(
    <Fade in
    timeout={1000}
    >
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Routes></Routes>
      </div>
    </Container>
    </Fade>
  )
}