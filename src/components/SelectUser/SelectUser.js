import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { LinkSharp } from '@material-ui/icons';
const SelectUser = () => (
  <Container>
    <Card className="w100">
      <CardContent>
        <Typography
          variant="h5"
          component="h1"
          align="center"
          className="margin-b-three"
        >
          Por favor indicanos quién eres
        </Typography>
        <Box display="flex" justifyContent="center" className="w100">
          <Button
            component={Link}
            to="/lawyers"
            variant="contained"
            color="secondary"
            type="submit"
            fullWidth
            className="buttonUsers margin-b-one"
          >
            Abogado
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" className="w100">
          <Button
            component={Link}
            to="/preguntas/dependencia"
            variant="contained"
            color="secondary"
            type="submit"
            fullWidth
            className="buttonUsers"
          >
            Cliente
          </Button>
        </Box>
      </CardContent>
    </Card>
  </Container>
);

export default SelectUser;
