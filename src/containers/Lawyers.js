import React from 'react';

// Components
import Box from '@material-ui/core/Box';
import logo from '../assets/images/logo-header.svg';
import CenteredBox from '../components/CenteredBox';

const SelectUserView = () => (
  <CenteredBox>
    <Box display="flex" justifyContent="center" className="margin-b-two">
      <img src={logo} alt="AgroSuper Logo" />
    </Box>
  </CenteredBox>
);

export default SelectUserView;
