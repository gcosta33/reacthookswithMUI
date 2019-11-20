import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))
export default function SignIn({ history }) {
  const [user, setUser] = useState('')
  const [userValid, setUserValid] = useState(true)
  const [password, setPassword] = useState('')
  const classes = useStyles();

  function handlUser(event) {
    setUser(event.target.value)
    if (event.target.value.search("@") !== -1 ) {
      setUserValid(true)
    } else {
      setUserValid(false)
    }
  }
  function handleSubmit(event) {
    event.preventDefault()
    if (user.length > 0 && password.length > 0 && userValid) {
      console.log("ok");
      localStorage.setItem('user', user);
      history.push('/dashboard')
    } else {
      console.log('ainda n');

    }

  }
  return (
    <>
      <Typography component="h1" variant="h5">
        Entrar
        </Typography>
      <form onSubmit={handleSubmit}
        className={classes.form} noValidate>
        <TextField
          error={userValid ? false : true}
          helperText={userValid ? '' : 'Nome de usuário deve conter "@"'}
          onChange={(event) => handlUser(event)}
          value={user}
          placeholder="user@user"
          variant="outlined"
          margin="normal"
          fullWidth
          id="user"
          label="Nome de Usuário"
          name="user"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          label="Senha"
          type="password"
          id="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Entrar
          </Button>

      </form>
    </>
  );
}