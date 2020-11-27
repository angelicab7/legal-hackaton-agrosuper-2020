import React from 'react';

// Components
import Box from '@material-ui/core/Box';
import logo from '../assets/images/logo-header.svg';
import Container from '@material-ui/core/Container';
import TableInfo from '../components/Table/TableInfo';

const SelectUserView = () => (
  <Container className={`d-flex grow-1`}>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className="centered-box-container2"
    >
      <TableInfo/>
    </Box>
  </Container>
);

export default SelectUserView;
