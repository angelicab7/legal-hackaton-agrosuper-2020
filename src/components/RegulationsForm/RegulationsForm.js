import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import {
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Box,
  Button,
  Typography,
  Grid,
} from '@material-ui/core';
import ProgressBar from '../ProgressBar';

const RegulationsForm = ({ onNext }) => {
  const { register, handleSubmit, control } = useForm();
  const testData = [{ bgcolor: '#002089', completed: 80 }];

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
        Cumplimiento de normativa:
      </Typography>
      <form onSubmit={handleSubmit(onNext)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputLabel>Exigencias Medioambientales:</InputLabel>
          </Grid>
          <Grid item xs={4} md={3}>
            <FormControl required fullWidth>
              <InputLabel id="exigencias-medioambientales-label">
                Si/No
              </InputLabel>
              <Controller
                name="exigenciasMedioambientales"
                control={control}
                defaultValue=""
                as={
                  <Select labelId="exigencias-medioambientales-label" required>
                    <MenuItem value>Si</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={8} md={9}>
            <TextField
              name="exigenciasMedioambientalesComentarios"
              type="text"
              label="¿Cuáles?"
              variant="outlined"
              className="margin-b-one"
              inputRef={register}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Certificaciones requeridas:</InputLabel>
          </Grid>
          <Grid item xs={4} md={3}>
            <FormControl required fullWidth>
              <InputLabel id="certificaciones-requeridas-label">
                Si/No
              </InputLabel>
              <Controller
                name="certificacionesRequeridas"
                control={control}
                defaultValue=""
                as={
                  <Select labelId="certificaciones-requeridas-label" required>
                    <MenuItem value>Si</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={8} md={9}>
            <TextField
              name="certificacionesRequeridasComentarios"
              type="text"
              label="¿Cuáles?"
              variant="outlined"
              className="margin-b-one"
              inputRef={register}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Licencia de conducir:</InputLabel>
          </Grid>
          <Grid item xs={4} md={3}>
            <FormControl required fullWidth>
              <InputLabel id="licencia-conducir-label">Si/No</InputLabel>
              <Controller
                name="licenciaDeConducir"
                control={control}
                defaultValue=""
                as={
                  <Select labelId="licencia-conducir-label" required>
                    <MenuItem value>Si</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={8} md={9}>
            <TextField
              name="licenciaDeConducirComentarios"
              type="text"
              label="¿Cuáles?"
              variant="outlined"
              className="margin-b-one"
              inputRef={register}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Cursos especiales:</InputLabel>
          </Grid>
          <Grid item xs={4} md={3}>
            <FormControl required fullWidth>
              <InputLabel id="cursos-especiales-label">Si/No</InputLabel>
              <Controller
                name="cursosEspeciales"
                control={control}
                defaultValue=""
                as={
                  <Select labelId="cursos-especiales-label" required>
                    <MenuItem value>Si</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={8} md={9}>
            <TextField
              name="cursosEspecialesComentarios"
              type="text"
              label="¿Cuáles?"
              variant="outlined"
              className="margin-b-one"
              inputRef={register}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Otros:</InputLabel>
          </Grid>
          <Grid item xs={4} md={3}>
            <FormControl required fullWidth>
              <InputLabel id="otros-label">Si/No</InputLabel>
              <Controller
                name="otros"
                control={control}
                defaultValue=""
                as={
                  <Select labelId="otros-label" required>
                    <MenuItem value>Si</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={8} md={9}>
            <TextField
              name="otrosComentarios"
              type="text"
              label="¿Cuáles?"
              variant="outlined"
              className="margin-b-one"
              inputRef={register}
              fullWidth
            />
          </Grid>
        </Grid>
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          className="margin-t-two"
        >
          <Button
            component={Link}
            to="/preguntas/plazoytarifas"
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
export default RegulationsForm;
