import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  submit: {
    marginTop: theme.spacing(10),
    color:theme.palette.action.disabled
  }
}));

export default function Dashboard({history}) {
  const [user,setUser] = useState('')
  const classes = useStyles();
  useEffect(()=>{
    const _user = localStorage.getItem('user')
    if(_user.length>=1){
      setUser(_user)
    }else{
      history.push('/')
    }
    
  },[history])
  return (
    
    <>
      <Typography component="h1" variant="overline">
        Bem Vindo
    </Typography>
      <Typography 
      color="textSecondary"
      component="h1" 
      variant="h3">
        {user}
      </Typography>
      <Button
        onClick={()=>{
          localStorage.setItem('user','')
          history.push('/')
        }}
        variant="contained"
        className={classes.submit}
      >
        Sair
    </Button>
    </>
  
  )
}