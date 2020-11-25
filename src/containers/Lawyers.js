import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import logo from '../assets/images/logo-header.svg';

const SelectUserView = () => (
  <div className="home-container">
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className="centered-box-container"
      >
        <Box display="flex" justifyContent="center" className="margin-b-two">
          <img src={logo} alt="AgroSuper Logo" />
        </Box>
      </Box>
    </Container>
  </div>
);

export default SelectUserView;