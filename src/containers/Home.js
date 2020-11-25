import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import LoginForm from '../components/LoginForm/LoginForm';

const Home = () => (
  <Container className="d-flex grow-1">
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className="centered-box-container grow-1"
    >
      <LoginForm />
    </Box>
  </Container>
);

export default Home;
