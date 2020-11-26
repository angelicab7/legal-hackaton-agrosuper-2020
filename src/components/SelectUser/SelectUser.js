/* eslint-disable arrow-body-style */
import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
const SelectUser = () => {
  //   const onSubmit = (data) => {
  //     console.log(data);
  // };
  return (
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
              href="/lawyers"
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
              href="/preguntas/dependencia"
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
};
export default SelectUser;
