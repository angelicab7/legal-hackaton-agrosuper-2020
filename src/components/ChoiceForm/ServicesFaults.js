import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import ProgressBar from '../ProgressBar';

const ServicesFaults = ({ onNext }) => {
  const { register, handleSubmit, control } = useForm();
  const testData = [{ bgcolor: '#002089', completed: 60, id: 'color' }];

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
        <TextField
          name="nivelesServicios"
          label="Niveles de servicios"
          variant="outlined"
          inputRef={register}
          required
          fullWidth
          className="margin-b-one"
        />
        <TextField
          name="hecho"
          label="Descripción del Hecho"
          variant="outlined"
          inputRef={register}
          required
          fullWidth
          className="margin-b-one"
        />
        <FormControl variant="outlined" className="margin-b-one" fullWidth>
          <InputLabel id="tipo-falta-label">Tipo de falta</InputLabel>
          <Controller
            as={
              <Select labelId="tipo-falta-label" required label="Tipo de falta">
                <MenuItem value="Leve">Leve</MenuItem>
                <MenuItem value="Grave">Grave</MenuItem>
                <MenuItem value="Crítica">Crítica</MenuItem>
              </Select>
            }
            name="tipoDeFalta"
            control={control}
            defaultValue=""
          />
        </FormControl>
        <TextField
          name="montoMulta"
          label="Monto de la multa (UF)"
          variant="outlined"
          type="number"
          inputRef={register}
          required
          fullWidth
          className="margin-b-one"
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
