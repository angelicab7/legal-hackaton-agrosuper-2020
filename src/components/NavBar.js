import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';

// Components
import withAuth from './Auth/withAuth';
import logo from '../assets/images/logo-header.svg';

const NavBar = ({ isAuthenticated }) => (
  <AppBar position="static" color="transparent">
    <Toolbar>
      {/**
        <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      */}
      <Box display="flex" alignItems="center" flexGrow={1}>
        <Link to="/">
          <img src={logo} alt="Agro Super Logo" width={100} />
        </Link>
      </Box>
      {isAuthenticated && (
        <Button component={Link} to="/logout" color="inherit">
          Logout
        </Button>
      )}
    </Toolbar>
  </AppBar>
);

export default withAuth(NavBar);
