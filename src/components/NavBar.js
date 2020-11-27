import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// Components
import withAuth from './Auth/withAuth';
import logo from '../assets/images/logo-header.svg';

const NavBar = ({ isAuthenticated, authContext }) => {
  const {
    session: { displayName },
  } = authContext;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(false);
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Box
          display="flex"
          alignItems="center"
          flexGrow={1}
          component={Link}
          to="/"
        >
          <img src={logo} alt="Agro Super Logo" width={100} />
        </Box>
        {isAuthenticated && (
          <>
            <IconButton
              aria-controls="user-menu"
              aria-haspopup="true"
              aria-label="Menu de usuario"
              color="secondary"
              onClick={handleMenuClick}
            >
              <AccountCircleIcon fontSize="large" />
            </IconButton>
            <Menu
              id="user-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <Typography className="padding-b-half padding-x-one" variant="h6">
                <span>{`Bienvenido/a, `}</span>
                {displayName && <span>{displayName}</span>}
              </Typography>
              <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/logout">
                Cerrar sesión
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default withAuth(NavBar);
