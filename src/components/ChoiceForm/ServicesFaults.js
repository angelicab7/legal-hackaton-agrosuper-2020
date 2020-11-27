import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Box from '@material-ui/core/Box';

const ServicesFaults = ({ onNext, handler }) => {
  const { register, handleSubmit, control } = useForm();
  const [countFaultsTwo, setFaultwo] = useState(false);
  const [countFaultsThree, setFaulthree] = useState(false);
  const [countFaultsFour, setFaultfour] = useState(false);

  return (
    <>
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
          label=" Escribir o adjuntar un archivo pdf con el requerimiento"
          variant="outlined"
          inputRef={register}
          multiline
          rows={4}
          required
          fullWidth
          className="servicesLv2"
        />
        <div className="fileServi">
          <label htmlFor="upload-photo">
            <input
              style={{ display: 'none' }}
              id="archivoNivelServicio"
              name="upload-photo"
              inputRef={register}
              type="file"
            />
            <Button
              color="secondary"
              variant="contained"
              component="span"
              className="fileButton"
            >
              <AttachFileIcon fontSize="large" />
            </Button>
          </label>
        </div>
        <InputLabel id="demo-simple-select-label">Faltas y Multas:</InputLabel>
        {/* Una falta */}
        <div className="containerFaults">
          <div className="hechoDiv">
            <TextField
              name="Hecho"
              label="Hecho"
              variant="outlined"
              inputRef={register}
              required
              fullWidth
              className="servicesLvl"
            />
          </div>
          <div className="tipoDiv">
            <FormControl variant="outlined" className="typeFault" required>
              <InputLabel id="tipoFalta">Tipo de falta</InputLabel>
              <Controller
                name="tipoFalta"
                control={control}
                defaultValue=""
                as={
                  <Select labelId="tipo-falta-label" id="tipoFaltaSelect">
                    <MenuItem value="Leve">Leve</MenuItem>
                    <MenuItem value="Grave">Grave</MenuItem>
                    <MenuItem value="Crítica">Crítica</MenuItem>
                  </Select>
                }
              />
            </FormControl>
          </div>
          <div className="fileDiv">
            <label htmlFor="upload-photo">
              <input
                style={{ display: 'none' }}
                id="fileFalta"
                inputRef={register}
                name="upload-photo"
                type="file"
              />
              <Button
                color="secondary"
                variant="contained"
                component="span"
                className="fileButton"
              >
                <AttachFileIcon fontSize="large" />
              </Button>
            </label>
          </div>
          <div className="montoDiv">
            <TextField
              name="montoMulta"
              label="Multa (UF)"
              variant="outlined"
              type="number"
              inputRef={register}
              required
              fullWidth
              className="servicesLvl"
            />
          </div>
        </div>
        {/* Dos faltas */}
        {countFaultsTwo && (
          <div className="containerFaults">
            <div className="hechoDiv">
              <TextField
                name="Hecho2"
                label="Hecho"
                variant="outlined"
                inputRef={register}
                required
                fullWidth
                className="servicesLvl"
              />
            </div>
            <div className="tipoDiv">
              <FormControl variant="outlined" className="typeFault" required>
                <InputLabel id="tipoFalta">Tipo de falta</InputLabel>
                <Controller
                  name="tipoFalta2"
                  control={control}
                  defaultValue=""
                  as={
                    <Select labelId="tipo-falta-label" id="tipoFaltaSelect">
                      <MenuItem value="Leve">Leve</MenuItem>
                      <MenuItem value="Grave">Grave</MenuItem>
                      <MenuItem value="Crítica">Crítica</MenuItem>
                    </Select>
                  }
                />
              </FormControl>
            </div>
            <div className="fileDiv">
              <label htmlFor="upload-photo">
                <input
                  style={{ display: 'none' }}
                  id="fileFalta2"
                  inputRef={register}
                  name="upload-photo"
                  type="file"
                />
                <Button
                  color="secondary"
                  variant="contained"
                  component="span"
                  className="fileButton"
                >
                  <AttachFileIcon fontSize="large" />
                </Button>
              </label>
            </div>
            <div className="montoDiv">
              <TextField
                name="montoMulta2"
                label="Multa (UF)"
                variant="outlined"
                type="number"
                inputRef={register}
                required
                fullWidth
                className="servicesLvl"
              />
            </div>
          </div>
        )}
        {/* Tres faltas */}
        {countFaultsThree && (
          <div className="containerFaults">
            <div className="hechoDiv">
              <TextField
                name="Hecho3"
                label="Hecho"
                variant="outlined"
                inputRef={register}
                required
                fullWidth
                className="servicesLvl"
              />
            </div>
            <div className="tipoDiv">
              <FormControl variant="outlined" className="typeFault" required>
                <InputLabel id="tipoFalta">Tipo de falta</InputLabel>
                <Controller
                  name="tipoFalta3"
                  control={control}
                  defaultValue=""
                  as={
                    <Select labelId="tipo-falta-label" id="tipoFaltaSelect">
                      <MenuItem value="Leve">Leve</MenuItem>
                      <MenuItem value="Grave">Grave</MenuItem>
                      <MenuItem value="Crítica">Crítica</MenuItem>
                    </Select>
                  }
                />
              </FormControl>
            </div>
            <div className="fileDiv">
              <label htmlFor="upload-photo">
                <input
                  style={{ display: 'none' }}
                  id="fileFalta3"
                  inputRef={register}
                  name="upload-photo"
                  type="file"
                />
                <Button
                  color="secondary"
                  variant="contained"
                  component="span"
                  className="fileButton"
                >
                  <AttachFileIcon fontSize="large" />
                </Button>
              </label>
            </div>
            <div className="montoDiv">
              <TextField
                name="montoMulta3"
                label="Multa (UF)"
                variant="outlined"
                type="number"
                inputRef={register}
                required
                fullWidth
                className="servicesLvl"
              />
            </div>
          </div>
        )}
        {/* Cuatro faltas */}
        {countFaultsFour && (
          <div className="containerFaults">
            <div className="hechoDiv">
              <TextField
                name="Hecho4"
                label="Hecho"
                variant="outlined"
                inputRef={register}
                required
                fullWidth
                className="servicesLvl"
              />
            </div>
            <div className="tipoDiv">
              <FormControl variant="outlined" className="typeFault" required>
                <InputLabel id="tipoFalta">Tipo de falta</InputLabel>
                <Controller
                  name="tipoFalta4"
                  control={control}
                  defaultValue=""
                  as={
                    <Select labelId="tipo-falta-label" id="tipoFaltaSelect">
                      <MenuItem value="Leve">Leve</MenuItem>
                      <MenuItem value="Grave">Grave</MenuItem>
                      <MenuItem value="Crítica">Crítica</MenuItem>
                    </Select>
                  }
                />
              </FormControl>
            </div>
            <div className="fileDiv">
              <label htmlFor="upload-photo">
                <input
                  style={{ display: 'none' }}
                  id="fileFalta2"
                  inputRef={register}
                  name="upload-photo"
                  type="file"
                />
                <Button
                  color="secondary"
                  variant="contained"
                  component="span"
                  className="fileButton"
                >
                  <AttachFileIcon fontSize="large" />
                </Button>
              </label>
            </div>
            <div className="montoDiv">
              <TextField
                name="montoMulta4"
                label="Multa (UF)"
                variant="outlined"
                type="number"
                inputRef={register}
                required
                fullWidth
                className="servicesLvl"
              />
            </div>
          </div>
        )}
        {!countFaultsTwo && (
          <Button
            onClick={() => {
              setFaultwo(true);
            }}
          >
            Agregar otra falta
          </Button>
        )}
        {countFaultsTwo && !countFaultsThree && (
          <Button
            onClick={() => {
              setFaulthree(true);
            }}
          >
            Agregar otra falta
          </Button>
        )}
        {countFaultsThree && !countFaultsFour && (
          <Button
            onClick={() => {
              setFaultfour(true);
            }}
          >
            Agregar otra falta
          </Button>
        )}

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
            onClick={() => {
              handler({ bgcolor: '#002089', completed: 40 });
            }}
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
