import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const CenteredBox = ({ children, className }) => (
  <Container className={`d-flex grow-1 ${className}`}>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className="centered-box-container grow-1"
    >
      {children}
    </Box>
  </Container>
);

CenteredBox.defaultProps = {
  className: '',
};

export default CenteredBox;
