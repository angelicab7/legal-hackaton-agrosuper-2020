import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';

import logo from '../assets/images/logo-header-white.svg';

const NavBar = () => (
  <AppBar position="static" color="secondary">
    <Toolbar>
      {/**
        <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      */}
      <Box display="flex" alignItems="center" flexGrow={1}>
        <img src={logo} alt="Agro Super Logo" width={100} />
      </Box>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);

export default NavBar;
