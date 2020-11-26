import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import CenteredBox from '../components/CenteredBox';
import Footer from '../components/Footer'


const Home = () => (
  <CenteredBox>
    <LoginForm />
    <Footer/>
  </CenteredBox>
);

export default Home;
