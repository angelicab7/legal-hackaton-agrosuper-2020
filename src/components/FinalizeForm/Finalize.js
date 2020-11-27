import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const FinalizeForm = ({ handler }) => (
  <>
    <Typography
      variant="h3"
      component="h1"
      align="center"
      className="margin-b-one"
    >
      Tu solicitud se ha enviado correctamente
    </Typography>
    <Grid container spacing={2}>
      <Typography
        variant="caption"
        component="h1"
        align="center"
        className="margin-b-one"
      >
        Tu solicitud de contrato <span>Nº 001</span> se envio correctamente.
        Para mayor detalle favor revisa en tu bandeja de correo electrónico.
      </Typography>
    </Grid>
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      className="margin-t-two"
    >
      <Button
        component={Link}
        to="/preguntas/dependencia"
        variant="contained"
        color="primary"
        type="submit"
        onClick={() => {
          handler({ bgcolor: '#002089', completed: 0 });
        }}
      >
        Volver al inicio
      </Button>
    </Box>
  </>
);

export default FinalizeForm;
