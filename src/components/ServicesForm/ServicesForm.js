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
// import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';
// import { reject } from 'core-js/fn/promise';

const ServicesForm = ({ onNext }) => {
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

      fileReader.onerror = () => {
        reject(error);
      };
    });

  // };

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
        <form onSubmit={handleSubmit(onNext)} encType="multipart/form-data">
          <InputLabel id="demo-simple-select-label">
            Objetos Servicios
          </InputLabel>
          <TextField
            name="objetoServicios"
            type="text"
            variant="outlined"
            inputRef={register}
            required
            fullWidth
            className="margin-b-one"
          />
          <InputLabel id="demo-simple-select-label">
            Descripción Servicios
          </InputLabel>
          <TextField
            name="descripcionServicios"
            type="text"
            variant="outlined"
            inputRef={register}
            required
            fullWidth
            className="margin-b-one"
          />
          <InputLabel id="demo-simple-select-label">
            Propuesta de Servicios
          </InputLabel>
          <TextField
            name="propuestaServicios"
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
          <InputLabel id="demo-simple-select-label">
            Área destinada a los Servicios
          </InputLabel>
          <FormControl>
            <InputLabel>Si/No</InputLabel>
            <Select
              labelId="select-id"
              id="yes-ex"
              //   value=
              //   onChange={onChange}
              required
            >
              <MenuItem value="Si">Si</MenuItem>
              <MenuItem value="NA">No Aplica</MenuItem>
            </Select>
          </FormControl>
          {/* <div className="text-hidden"> */}
          <TextField
            name="areaServicios"
            type="text"
            label="Detalle Área destinada a servicios"
            variant="outlined"
            inputRef={register}
            required
            fullWidth
            className="margin-b-one"
          />
          {/* </div> */}

          <InputLabel id="demo-simple-select-label">
            Lugar en que se prestara el
          </InputLabel>
          <FormControl>
            <InputLabel>Si/No</InputLabel>
            <Select
              labelId="select-id"
              id="yes-ex"
              //   value=
              //   onChange={}
              required
            >
              <MenuItem value="Si">Si</MenuItem>
              <MenuItem value="NA">No Aplica</MenuItem>
            </Select>
          </FormControl>
          <div className="text-hidden">
            <TextField
              name="lugarServicios"
              type="text"
              variant="outlined"
              inputRef={register}
              required
              fullWidth
              className="margin-b-one"
            />
          </div>

          <InputLabel id="demo-simple-select-label">
            Fechas en que se prestara el servicio
          </InputLabel>
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
          <TextField
            id="date"
            label="Término"
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
          <InputLabel id="demo-simple-select-label">
            Horarios en que se prestara el servicio
          </InputLabel>
          <TextField
            id="hour"
            type="text"
            name="horarioServicio"
            variant="outlined"
            inputRef={register}
            InputLabelProps={{
              shrink: true,
            }}
            className="datePicker"
            required
          />
          <div className="bottomBox">
            <div className="boxOne">
              <Button
                href="/preguntas/contratistas"
                variant="contained"
                color="secondary"
                type="submit"
              >
                Volver
              </Button>
            </div>
            <div className="boxOne">
              <Button variant="contained" color="primary" type="submit">
                Siguiente
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ServicesForm;
