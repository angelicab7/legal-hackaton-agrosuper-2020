import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const DependencySelector = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        className="margin-b-one"
      >
        Área del servicio
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl className="w100 margin-b-three margin-t-three">
          <InputLabel id="demo-simple-select-label">
            ¿Qué tipo de solicitud deseas realizar?
          </InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            <MenuItem value={10}>Fiscalizaciones</MenuItem>
            <MenuItem value={20}>Contratos</MenuItem>
            <MenuItem value={30}>Carta de termino o finiquito</MenuItem>
            <MenuItem value={30}> Poderes</MenuItem>
            <MenuItem value={30}> Otros requerimientos </MenuItem>
          </Select>
        </FormControl>
        <FormControl className="w100 margin-b-three margin-t-three">
          <InputLabel id="demo-simple-select-label">
            Por favor, ingresa el área de servicio al que perteneces
          </InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            <MenuItem value={10}>Producción Animal</MenuItem>
            <MenuItem value={20}>Industrial</MenuItem>
            <MenuItem value={30}>TI</MenuItem>
            <MenuItem value={30}>
              Innovación (Industrial, Producción Animal, Corporativo)
            </MenuItem>
            <MenuItem value={30}> Plantas de Alimentos </MenuItem>
            <MenuItem value={30}>Relaciones comunitarias</MenuItem>
            <MenuItem value={30}>Sustentabilidad</MenuItem>
            <MenuItem value={30}>Adquisiciones</MenuItem>
            <MenuItem value={30}>Finanzas</MenuItem>
            <MenuItem value={30}>Sucursales</MenuItem>
            <MenuItem value={30}>Cadena de suministro</MenuItem>
            <MenuItem value={30}>Oficinas internacionales</MenuItem>
            <MenuItem value={30}>Maquila</MenuItem>
            <MenuItem value={30}>Otros</MenuItem>
          </Select>
        </FormControl>
        <Box display="flex" justifyContent="center" className="w100">
          <Button variant="contained" color="primary" type="submit">
            Siguiente
          </Button>
        </Box>
      </form>
    </>
  );
};

export default DependencySelector;
