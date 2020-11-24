import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LoginForm from '../components/LoginForm/LoginForm';
import logo from '../assets/images/logo-header.png';

const Home = () => (
  <div className="home-container">
    <Container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item lg={6}>
          <Box display="flex" justifyContent="center">
            <img src={logo} alt="AgroSuper Logo" />
          </Box>
          <LoginForm />
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default Home;
