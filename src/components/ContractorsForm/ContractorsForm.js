import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { useForm } from 'react-hook-form';

const ContractorsForm = ({ onNext }) => {
  const { register, handleSubmit } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
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
          Datos Contratista y Coordinadores
        </Typography>
        <form onSubmit={handleSubmit(onNext)}>
          <InputLabel id="demo-simple-select-label">Razón Social</InputLabel>
          <TextField
            name="razonSocial"
            variant="outlined"
            inputRef={register}
            required
            fullWidth
            className="margin-b-one"
          />
          <InputLabel id="demo-simple-select-label">
            RUT Razón Social
          </InputLabel>
          <TextField
            name="rutRazonSocial"
            type="text"
            variant="outlined"
            inputRef={register}
            required
            fullWidth
            className="margin-b-one"
          />
          <InputLabel id="demo-simple-select-label">Domicilio</InputLabel>
          <TextField
            name="domicilioRazonSocial"
            type="text"
            variant="outlined"
            inputRef={register}
            required
            fullWidth
            className="margin-b-one"
          />
          <InputLabel id="demo-simple-select-label">
            Representante Legal
          </InputLabel>
          <TextField
            name="repLegal"
            type="text"
            variant="outlined"
            inputRef={register}
            required
            fullWidth
            className="margin-b-one"
          />
          <InputLabel id="demo-simple-select-label">
            RUT Representante Legal
          </InputLabel>
          <TextField
            name="rutRepLegal"
            type="text"
            variant="outlined"
            inputRef={register}
            required
            fullWidth
            className="margin-b-one"
          />
          <InputLabel id="demo-simple-select-label">Personería</InputLabel>
          <TextField
            name="personeria"
            type="file"
            variant="outlined"
            inputRef={register}
            required
            fullWidth
            className="margin-b-one"
          />
          <div className="bottomBox">
            <div className="boxOne">
              <Button
                href="/preguntas/dependencia"
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

export default ContractorsForm;
