import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';

// Components
import PageLoader from '../components/PageLoader';

const LogoutPage = () => {
  const history = useHistory();

  const logout = useCallback(async () => {
    const auth = firebase.auth();
    await auth.signOut();
    setTimeout(() => {
      history.push('/');
    }, 1000);
  }, [history]);

  useEffect(() => {
    logout();
  }, [logout]);

  return <PageLoader>Cerrando sesión...</PageLoader>;
};

export default LogoutPage;
