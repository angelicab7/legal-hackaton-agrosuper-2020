import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';
import firebase from 'firebase/app';

import microsoftSignInLogo from '../../assets/images/ms-symbollockup_signin_dark.svg';

const provider = new firebase.auth.OAuthProvider('microsoft.com');

provider.setCustomParameters({
  client_id: '78185eca-50e2-4cf9-98e0-4b24232d7323',
  response_type: 'code',
  tenant: '5070d741-c777-43a7-b7cf-46e42f66723e',
  redirect_uri: 'http://localhost:8080',
});

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const onMicrosoftLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log('LOGIN', result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Card className="w100">
      <CardContent>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          className="margin-b-one"
        >
          Bienvenido
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            name="username"
            label="Usuario"
            variant="outlined"
            inputRef={register}
            required
            fullWidth
            className="margin-b-one"
          />
          <TextField
            name="password"
            type="password"
            label="Contraseña"
            variant="outlined"
            inputRef={register}
            required
            fullWidth
            className="margin-b-one"
          />
          <Box display="flex" justifyContent="center">
            <Button variant="contained" color="primary" type="submit">
              Iniciar sesión
            </Button>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button type="button" onClick={onMicrosoftLogin}>
              <img
                src={microsoftSignInLogo}
                alt="Iniciar sesión con Microsoft"
              />
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
