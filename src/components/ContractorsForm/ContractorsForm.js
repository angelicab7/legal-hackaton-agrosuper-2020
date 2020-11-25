import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';

const ContractorsForm = () => {
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
          Datos Contratista y Coordinadores
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography
            variant="h6"
            component="h6"
            align="left"
            className="margin-b-one"
          >
            Razón Social
          </Typography>
          <TextField
            name="razón social"
            label="Razón Social"
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
            RUT Razón Social
          </Typography>
          <TextField
            name="rutrazonsocial"
            type="text"
            label="RUT Razon Social"
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
            Domicilio
          </Typography>
          <TextField
            name="domiciliorazonsocial"
            type="text"
            label="Domicilio"
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
            Representante Legal
          </Typography>
          <TextField
            name="replegal"
            type="text"
            label="Representante Legal"
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
            RUT Representante Legal
          </Typography>
          <TextField
            name="rutreplegal"
            type="text"
            label="RUT Representante Legal"
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
            Personería
          </Typography>
          <TextField
            name="personeria"
            type="file"
            label=""
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

export default ContractorsForm;
