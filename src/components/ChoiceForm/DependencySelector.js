import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useForm, Controller } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const DependencySelector = ({ onNext }) => {
  const { control, handleSubmit } = useForm();

  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        className="margin-b-one"
      >
        Área del servicio
      </Typography>
      <form onSubmit={handleSubmit(onNext)}>
        <FormControl
          className="w100 margin-b-one margin-t-one"
          variant="outlined"
        >
          <InputLabel id="type-of-service-label">
            ¿Qué tipo de solicitud deseas realizar?
          </InputLabel>
          <Controller
            as={
              <Select
                labelId="type-of-service-label"
                required
                label="¿Qué tipo de solicitud deseas realizar?"
              >
                <MenuItem value="FISCALIZACIONES" disabled>
                  Fiscalizaciones
                </MenuItem>
                <MenuItem value="CONTRATOS" >Contratos</MenuItem>
                <MenuItem value="CARTA_FINIQUITO" disabled>
                  Carta de termino o finiquito
                </MenuItem>
                <MenuItem value="PODERES" disabled>Poderes</MenuItem>
                <MenuItem value="OTROS" disabled>Otros requerimientos </MenuItem>
              </Select>
            }
            name="serviceType"
            control={control}
            defaultValue=""
          />
        </FormControl>
        <FormControl className="w100 margin-b-three" variant="outlined">
          <InputLabel id="type-of-dependency-label">
            Por favor, ingresa el área de servicio al que perteneces
          </InputLabel>
          <Controller
            as={
              <Select
                labelId="type-of-dependency-label"
                required
                label="Por favor, ingresa el área de servicio al que perteneces"
              >
                <MenuItem value="PRODUCCION_ANIMAL">Producción Animal</MenuItem>
                <MenuItem value="INDUSTRIAL">Industrial</MenuItem>
                <MenuItem value="TI">TI</MenuItem>
                <MenuItem value="INNOVACION_INDUSTRIAL">
                  Innovación Industrial
                </MenuItem>
                <MenuItem value="INNOVACION_PRODANIMAL">
                  Innovación Producción Animal
                </MenuItem>
                <MenuItem value="INNOVACION_CORPORATIVO">
                  Innovación Corporativo
                </MenuItem>
                <MenuItem value="PLANTAS_ALIMENTOS">
                  Plantas de Alimentos
                </MenuItem>
                <MenuItem value="REOLACIONES_COMUNITARIAS">
                  Relaciones comunitarias
                </MenuItem>
                <MenuItem value="SUSTENTABILIDAD">Sustentabilidad</MenuItem>
                <MenuItem value="ADQUISICIONES">Adquisiciones</MenuItem>
                <MenuItem value="FINANZAS">Finanzas</MenuItem>
                <MenuItem value="SUCURSALES">Sucursales</MenuItem>
                <MenuItem value="CADENA_SUMINISTRO">
                  Cadena de suministro
                </MenuItem>
                <MenuItem value="OFICINAS_INTERNACIONALES">
                  Oficinas internacionales
                </MenuItem>
                <MenuItem value="MAQUILA">Maquila</MenuItem>
                <MenuItem value="OTROS">Otros</MenuItem>
              </Select>
            }
            name="dependencyType"
            control={control}
            defaultValue=""
          />
        </FormControl>
        <Box display="flex" justifyContent="center" className="w100">
          <Button variant="contained" color="primary" type="submit">
            Siguiente
          </Button>
        </Box>
      </form>
    </>
  );
};

export default DependencySelector;
