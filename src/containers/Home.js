import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Home = () => (
  <Container>
    <Typography variant="h1">Hello World</Typography>
    <Button variant="contained" color="secondary">
      Hello World
    </Button>
  </Container>
);

export default Home;
