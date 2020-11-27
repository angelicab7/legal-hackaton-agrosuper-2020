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
                <MenuItem value="FISCALIZACIONES">Fiscalizaciones</MenuItem>
                <MenuItem value="CONTRATOS">Contratos</MenuItem>
                <MenuItem value="CARTA_FINIQUITO">
                  Carta de termino o finiquito
                </MenuItem>
                <MenuItem value="PODERES">Poderes</MenuItem>
                <MenuItem value="OTROS">Otros requerimientos </MenuItem>
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
                <MenuItem value="PRODUCCION_ANIMAL,smarinv@agrosuper.com">
                  Producción Animal
                </MenuItem>
                <MenuItem value="INDUSTRIAL,mmanubens@agrosuper.com">
                  Industrial
                </MenuItem>
                <MenuItem value="TI,mmanubens@agrosuper.com">TI</MenuItem>
                <MenuItem value="INNOVACION_INDUSTRIAL,mmanubens@agrosuper.com">
                  Innovación Industrial
                </MenuItem>
                <MenuItem value="INNOVACION_PRODANIMAL,smarinv@agrosuper.com">
                  Innovación Producción Animal
                </MenuItem>
                <MenuItem value="INNOVACION_CORPORATIVO,mmanubens@agrosuper.com">
                  Innovación Corporativo
                </MenuItem>
                <MenuItem value="PLANTAS_ALIMENTOS,smarinv@agrosuper.com">
                  Plantas de Alimentos
                </MenuItem>
                <MenuItem value="RELACIONES_COMUNITARIAS,mmanubens@agrosuper.com">
                  Relaciones comunitarias
                </MenuItem>
                <MenuItem value="SUSTENTABILIDAD,smarinv@agrosuper.com">
                  Sustentabilidad
                </MenuItem>
                <MenuItem value="ADQUISICIONES,mmanubens@agrosuper.com">
                  Adquisiciones
                </MenuItem>
                <MenuItem value="FINANZAS,mmanubens@agrosuper.com">
                  Finanzas
                </MenuItem>
                <MenuItem value="SUCURSALES,smarinv@agrosuper.com">
                  Sucursales
                </MenuItem>
                <MenuItem value="CADENA_SUMINISTRO,mmanubens@agrosuper.com">
                  Cadena de suministro
                </MenuItem>
                <MenuItem value="OFICINAS_INTERNACIONALES,mmanubens@agrosuper.com">
                  Oficinas internacionales
                </MenuItem>
                <MenuItem value="MAQUILA,mmanubens@agrosuper.com">
                  Maquila
                </MenuItem>
                <MenuItem value="OTROS,fiscalia@agrosuper">Otros</MenuItem>
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
