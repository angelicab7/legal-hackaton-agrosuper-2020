import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import firebase from 'firebase/app';

// Components
import withAuth from '../Auth/withAuth';
import microsoftSignInLogo from '../../assets/images/ms-symbollockup_signin_dark.svg';

const provider = new firebase.auth.GoogleAuthProvider();

// const provider = new firebase.auth.OAuthProvider('microsoft.com');

// provider.setCustomParameters({
//   client_id: '78185eca-50e2-4cf9-98e0-4b24232d7323',
//   response_type: 'code',
//   tenant: '5070d741-c777-43a7-b7cf-46e42f66723e',
//   redirect_uri: 'http://localhost:8080',
// });

const LoginForm = ({ isAuthenticated }) => {
  const [isLoading, setIsLoading] = useState(false);

  const onMicrosoftLogin = async () => {
    setIsLoading(true);
    await firebase.auth().signInWithPopup(provider);
    setIsLoading(false);
  };

  if (isAuthenticated) {
    return <Redirect to="/user" />;
  }

  return (
    <Card className="w100">
      <CardContent>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          className="margin-b-three"
        >
          Bienvenido
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <AccountCircleIcon
            style={{ fontSize: 100 }}
            className="margin-b-one"
          />
          {isLoading && <CircularProgress className="margin-b-one" />}
          <Button type="button" onClick={onMicrosoftLogin} disabled={isLoading}>
            <img src={microsoftSignInLogo} alt="Iniciar sesión con Microsoft" />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default withAuth(LoginForm);
