import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import ProgressBar from '../ProgressBar';

const ServicesFaults = ({ onNext }) => {
  const { register, handleSubmit } = useForm();
  const testData = [{ bgcolor: '#002089', completed: 60 }];

  return (
    <>
      {testData.map((item) => (
        <ProgressBar
          key={item.id}
          bgcolor={item.bgcolor}
          completed={item.completed}
        />
      ))}
      <Typography
        variant="h3"
        component="h1"
        align="center"
        className="margin-b-one"
      >
        Niveles de Servicios y Multas:
      </Typography>
      <form onSubmit={handleSubmit(onNext)}>
        <InputLabel id="demo-simple-select-label">
          Niveles de Servicios:
        </InputLabel>
        <TextField
          name="Niveles de servicios"
          label="Niveles de servicios"
          variant="outlined"
          inputRef={register}
          required
          fullWidth
          className="servicesLvl"
        />
        <InputLabel id="demo-simple-select-label">Falta:</InputLabel>
        <TextField
          name="Hecho"
          label="Hecho"
          variant="outlined"
          inputRef={register}
          required
          fullWidth
          className="servicesLvl"
        />
        <FormControl variant="outlined" className="typeFault" required>
          <InputLabel id="tipoFalta">Tipo de falta</InputLabel>
          <Select labelId="tipo-falta-label" id="tipoFaltaSelect">
            <MenuItem value="Leve">Leve</MenuItem>
            <MenuItem value="Grave">Grave</MenuItem>
            <MenuItem value="Crítica">Crítica</MenuItem>
          </Select>
        </FormControl>
        <TextField
          name="Monto de la multa"
          label="monto de la multa (UF)"
          variant="outlined"
          type="number"
          inputRef={register}
          required
          fullWidth
          className="servicesLvl"
        />
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          className="margin-t-two"
        >
          <Button
            component={Link}
            to="/preguntas/servicios"
            variant="contained"
            color="secondary"
            type="submit"
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

export default ServicesFaults;
