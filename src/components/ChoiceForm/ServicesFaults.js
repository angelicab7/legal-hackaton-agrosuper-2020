import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const ServicesFaults = () => {
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
        Servicios y faltas:
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <div className="bottomBox">
            <div className="boxOne">
                <Button variant="contained" color="gray" type="submit">
                    Volver
                </Button>
            </div>
            <div className="boxOne">
                <Button href="/preguntas/plazoytarifas"  variant="contained" color="primary" type="submit">
                    Siguiente
                </Button>
            </div>
        </div>
      </form>
    </>
  );
};

export default ServicesFaults;
