import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/material-ui-theme';
// import firebase from 'firebase/app';
import 'firebase/firestore';

import './styles/main.scss';
import App from './app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

/*
const firebaseConfig = {
  ...Firebase Config
};
*/

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const app = (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
