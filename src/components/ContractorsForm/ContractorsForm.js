import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import ProgressBar from '../ProgressBar';

const ContractorsForm = ({ onNext, handler }) => {
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


  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        className="margin-b-one"
      >
        Datos Contratista y Coordinadores
      </Typography>
      <form onSubmit={handleSubmit(onNext)}>
        <TextField
          name="razonSocial"
          label="Razón Social"
          variant="outlined"
          inputRef={register}
          required
          fullWidth
          className="margin-b-one"
        />
        <TextField
          name="rutRazonSocial"
          label="RUT Razón Social"
          type="text"
          variant="outlined"
          inputRef={register}
          required
          fullWidth
          className="margin-b-one"
        />
        <TextField
          name="domicilioRazonSocial"
          label="Domicilio"
          type="text"
          variant="outlined"
          inputRef={register}
          required
          fullWidth
          className="margin-b-one"
        />
        <TextField
          name="repLegal"
          label="Representante Legal"
          type="text"
          variant="outlined"
          inputRef={register}
          required
          fullWidth
          className="margin-b-one"
        />
        <TextField
          name="rutRepLegal"
          label="RUT Representante Legal"
          type="text"
          variant="outlined"
          inputRef={register}
          required
          fullWidth
          className="margin-b-one"
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          name="personeria"
          label="Personería"
          type="file"
          id="docpdf"
          variant="outlined"
          inputRef={register(uploadFile)}
          required
          fullWidth
          className="margin-b-one"
          onChange={(e) => {
            uploadFile(e);
          }}
        />
        <div className="bottomBox">
          <div className="boxOne">
            <Button
              component={Link}
              to="/preguntas/dependencia"
              variant="contained"
              color="secondary"
              type="submit"
              onClick={() => { handler({bgcolor: '#002089', completed: 0}) }}
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
    </>
  );
};

export default ContractorsForm;
