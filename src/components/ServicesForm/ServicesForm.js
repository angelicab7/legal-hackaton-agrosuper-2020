import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';
import ProgressBar from '../ProgressBar';

const ServicesForm = ({ onNext, handler }) => {
  const { register, handleSubmit } = useForm();

  // Function to handle event onChange of input file
  const uploadFile = async (e) => {
    // console.log('estoy escuchando');
    // console.log(e.target.files);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    register(base64);
  };

  // Function to convert base 64

  const convertBase64 = (file) =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });


  // };

  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        className="margin-b-one"
      >
        Detalles Servicios
      </Typography>
      <form onSubmit={handleSubmit(onNext)} encType="multipart/form-data">
        <TextField
          name="objetoServicios"
          label="De qué versa el contrato"
          type="text"
          variant="outlined"
          inputRef={register}
          required
          fullWidth
          className="margin-b-one"
        />
        <TextField
          name="descripcionServicios"
          label="Descripción de los Servicios"
          type="text"
          variant="outlined"
          inputRef={register}
          required
          fullWidth
          className="margin-b-one"
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          name="propuestaServicios"
          label="Propuesta de Servicios"
          type="file"
          id="docpdf"
          variant="outlined"
          inputRef={register}
          required
          fullWidth
          className="margin-b-one"
          onChange={(e) => {
            uploadFile(e);
          }}
        />
        <TextField
          name="areaServicios"
          type="text"
          label="Área destinada a servicios"
          variant="outlined"
          inputRef={register}
          required
          fullWidth
          className="margin-b-one"
        />
        <TextField
          name="lugarServicios"
          label="Lugar de prestación de servicios"
          type="text"
          variant="outlined"
          inputRef={register}
          required
          fullWidth
          className="margin-b-one"
        />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputLabel>Fecha de prestación del servicio:</InputLabel>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="date"
              label="Inicio"
              name="inicioServicio"
              type="date"
              variant="outlined"
              inputRef={register}
              InputLabelProps={{
                shrink: true,
              }}
              className="datePicker"
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="date"
              label="Fin"
              name="finServicio"
              type="date"
              variant="outlined"
              inputRef={register}
              InputLabelProps={{
                shrink: true,
              }}
              className="datePicker"
              required
            />
          </Grid>
        </Grid>
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          className="margin-t-two"
        >
          <Button
            component={Link}
            to="/preguntas/contratistas"
            variant="contained"
            color="secondary"
            type="submit"
            onClick={() => { handler({bgcolor: '#002089', completed: 20}) }}
          >
            Anterior
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Siguiente
          </Button>
        </Box>
      </form>
    </>
  );
};

export default ServicesForm;
