import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';

const ServicesForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Card className="w100">
      <CardContent>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          className="margin-b-one"
        >
          Detalles Servicios
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography
            variant="h6"
            component="h6"
            align="left"
            className="margin-b-one"
          >
            Objeto Servicios
          </Typography>
          <TextField
            name="objetoservicios"
            type="text"
            label=""
            variant="outlined"
            inputRef={register}
            required
            fullWidth
            className="margin-b-one"
          />
          <Typography
            variant="h6"
            component="h6"
            align="left"
            className="margin-b-one"
          >
            Descripción Servicios
          </Typography>
          <TextField
            name="descripcionservicios"
            type="text"
            label=""
            variant="outlined"
            inputRef={register}
            required
            fullWidth
            className="margin-b-one"
          />
          <Typography
            variant="h6"
            component="h6"
            align="left"
            className="margin-b-one"
          >
            Propuesta de Servicios
          </Typography>
          <TextField
            name="propuestaservicios"
            type="field"
            label=""
            variant="outlined"
            inputRef={register}
            required
            fullWidth
            className="margin-b-one"
          />
          <Typography
            variant="h6"
            component="h6"
            align="left"
            className="margin-b-one"
          >
            Área destinada a los Servicios
          </Typography>
          <FormControl>
            <InputLabel>Si/No</InputLabel>
            <Select
              labelId="select-id"
              id="yes-ex"
              //   value=
              //   onChange=
              required
            >
              <MenuItem value="Si">Si</MenuItem>
              <MenuItem value="NA">No Aplica</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="areaservicios"
            type="text"
            label="Detalle Área destinada a servicios"
            variant="outlined"
            inputRef={register}
            required
            fullWidth
            className="margin-b-one"
          />
          <Typography
            variant="h6"
            component="h6"
            align="left"
            className="margin-b-one"
          >
            Lugar en que se prestara el Servicio
          </Typography>
          <FormControl>
            <InputLabel>Si/No</InputLabel>
            <Select
              labelId="select-id"
              id="yes-ex"
              //   value=
              //   onChange=
              required
            >
              <MenuItem value="Si">Si</MenuItem>
              <MenuItem value="NA">No Aplica</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="lugarservicios"
            type="text"
            label=""
            variant="outlined"
            inputRef={register}
            required
            fullWidth
            className="margin-b-one"
          />
          <Typography
            variant="h6"
            component="h6"
            align="left"
            className="margin-b-one"
          >
            Días y Horarios en que se prestara el Servicio
          </Typography>
          <TextField
            name="fecha inicio"
            type="date"
            label="Inicio"
            variant="outlined"
            inputRef={register}
            required
            fullWidth
            className="margin-b-one"
          />
          <TextField
            name="fecha termino"
            type="date"
            label="Término"
            variant="outlined"
            inputRef={register}
            required
            fullWidth
            className="margin-b-one"
          />
          <Box display="flex" justifyContent="center">
            <Button variant="contained" color="primary" type="submit">
              Siguiente
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default ServicesForm;
