import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import theme from './styles/material-ui-theme';
import './styles/main.scss';
import App from './app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAOG9oYqBtjsBRhsUS2foVa6LnpNsN1z4o',
  authDomain: 'agrosuper-legal-hackaton-2020.firebaseapp.com',
  databaseURL: 'https://agrosuper-legal-hackaton-2020.firebaseio.com',
  projectId: 'agrosuper-legal-hackaton-2020',
  storageBucket: 'agrosuper-legal-hackaton-2020.appspot.com',
  messagingSenderId: '198287142003',
  appId: '1:198287142003:web:62a79a9f9f0bf0697f8e06',
  measurementId: 'G-RTDD3L0NRR',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <>
          <CssBaseline />
          <App />
        </>
      </StylesProvider>
    </ThemeProvider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
