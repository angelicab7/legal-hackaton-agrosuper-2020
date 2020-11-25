import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const PlazoTarifa = () => {
  const { register, handleSubmit, control } = useForm();

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
        Plazo y tarifas:
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputLabel>Plazo de los Servicios:</InputLabel>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="lazoServicioFechaInicio"
              label="Inicio"
              type="date"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={register}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="lazoServicioFechaFin"
              label="Fin"
              type="date"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={register}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="renovacion"
              label="Renovación"
              variant="outlined"
              inputRef={register}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" fullWidth required>
              <InputLabel id="termino-anticipado-label">
                Término anticipado
              </InputLabel>
              <Controller
                name="terminoAnticipado"
                control={control}
                defaultValue={false}
                as={
                  <Select
                    labelId="termino-anticipado-label"
                    required
                    label="Término anticipado"
                  >
                    <MenuItem value>Si</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                }
              ></Controller>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <InputLabel>¿Contratista requiere hacer inversiones?</InputLabel>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl variant="outlined" className="typeFault" required>
              <InputLabel id="contratista-inversiones-label">Si/No</InputLabel>
              <Controller
                name="contratistaRequiereInversiones"
                control={control}
                defaultValue={false}
                as={
                  <Select labelId="contratista-inversiones-label" label="Si/No">
                    <MenuItem value>Si</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                }
              ></Controller>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              name="contratistaRequiereInversionesCuales"
              label="¿Cuáles?"
              variant="outlined"
              inputRef={register}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              name="contratistaRequiereInversionesMonto"
              label="Monto"
              variant="outlined"
              inputRef={register}
              type="number"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Reajuste:</InputLabel>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" required fullWidth>
              <InputLabel id="reajuste-label">Si/No</InputLabel>
              <Controller
                name="reajuste"
                control={control}
                defaultValue={false}
                as={
                  <Select labelId="reajuste-label" label="Si/No">
                    <MenuItem value>Si</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                }
              ></Controller>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" required fullWidth>
              <InputLabel id="reajuste-periodicidad-label">
                Periodicidad del reajuste
              </InputLabel>
              <Controller
                name="reajustePeriodicidad"
                control={control}
                defaultValue=""
                as={
                  <Select
                    labelId="reajuste-periodicidad-label"
                    label="Periodicidad del reajuste"
                  >
                    <MenuItem value="Anual">Anual</MenuItem>
                    <MenuItem value="Semestral">Semestral</MenuItem>
                    <MenuItem value="Cuatrimestral">Cuatrimestral</MenuItem>
                    <MenuItem value="Otro">Otro</MenuItem>
                  </Select>
                }
              ></Controller>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="reajusteIPC"
              label="¿IPC/USD/otro?"
              variant="outlined"
              inputRef={register}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Forma y oportunidad del pago:</InputLabel>
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" required fullWidth>
              <InputLabel id="forma-oportunidad-pago-label">
                Forma y oportunidad del pago:
              </InputLabel>
              <Controller
                name="formaOportunidadPago"
                control={control}
                defaultValue=""
                as={
                  <Select
                    labelId="forma-oportunidad-pago-label"
                    label="Forma y oportunidad del pago"
                  >
                    <MenuItem value="Mensual">Mensual</MenuItem>
                    <MenuItem value="PorHito">Por hito</MenuItem>
                  </Select>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          className="margin-t-two"
        >
          <Button variant="contained" color="secondary" type="submit">
            Volver
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Siguiente
          </Button>
        </Box>
      </form>
    </>
  );
};

export default PlazoTarifa;
