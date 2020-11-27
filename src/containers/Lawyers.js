import React from 'react';

// Components
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TableInfo from '../components/Table/TableInfo';

const SelectUserView = () => (
  <Container className="d-flex grow-1">
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className="centered-box-container2 margin-y-two"
    >
      <Typography
        variant="h3"
        component="h1"
        align="center"
        className="margin-b-one"
      >
        Solicitudes
      </Typography>
      <TableInfo />
    </Box>
  </Container>
);

export default SelectUserView;
