import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const PlazoTarifa = () => {
  const { register, handleSubmit } = useForm();

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
        <InputLabel id="demo-simple-select-label">
            Plazo de los Servicios:
        </InputLabel>
        <div className="plazos">
            <div className="boxOne">
                <TextField
                    id="date"
                    label="Inicio"
                    type="date"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    className="datePicker"
                />
            </div>
            <div className="boxOne">
                <TextField
                    id="date"
                    label="Fin"
                    type="date"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    className="datePicker"
                />
            </div>
        </div>
        <div className="renovacion">
            <div className="boxTwo">
                <TextField
                    name="Renovacion"
                    label="Renovación"
                    variant="outlined"
                    inputRef={register}
                    required
                    fullWidth
                    className="test"
                />
            </div>
            <div className="boxTwo">
                <FormControl variant="outlined" className="typeFault" required>
                    <InputLabel id="tipoFalta">
                        Término anticipado
                    </InputLabel>
                    <Select labelId="tipo-falta-label" id="tipoFaltaSelect">
                        <MenuItem value={true}>Si</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
        <InputLabel id="demo-simple-select-label">
            ¿Contratista requiere hacer inversiones?
        </InputLabel>
        <div className="renovacion">
            <div className="boxTwo">
                <FormControl variant="outlined" className="typeFault" required>
                    <InputLabel id="tipoFalta">
                        Si/No
                    </InputLabel>
                    <Select labelId="tipo-falta-label" id="tipoFaltaSelect">
                        <MenuItem value={true}>Si</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="boxTwo">
                <TextField
                    name="Cuales"
                    label="¿Cuáles?"
                    variant="outlined"
                    inputRef={register}
                    required
                    fullWidth
                    className="test"
                />
            </div>
            <div className="boxTwo">
                <TextField
                    name="Monto"
                    label="Monto"
                    variant="outlined"
                    inputRef={register}
                    type="number"
                    required
                    fullWidth
                    className="test"
                />
            </div>
        </div>
        <InputLabel id="demo-simple-select-label">
            Reajuste:
        </InputLabel>
        <div className="renovacion">
            <div className="boxTwo">
                <FormControl variant="outlined" className="typeFault" required>
                    <InputLabel id="tipoFalta">
                        Si/No
                    </InputLabel>
                    <Select labelId="tipo-falta-label" id="tipoFaltaSelect">
                        <MenuItem value={true}>Si</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="boxTwo">
                <TextField
                    name="IPC/USD/otro"
                    label="¿IPC/USD/otro?"
                    variant="outlined"
                    inputRef={register}
                    required
                    fullWidth
                    className="test"
                />
            </div>
            <div className="boxTwo">
                <FormControl variant="outlined" className="typeFault" required>
                    <InputLabel id="tipoFalta">
                        Periodicidad del reajuste
                    </InputLabel>
                    <Select labelId="tipo-falta-label" id="tipoFaltaSelect">
                        <MenuItem value={'Anual'}>Anual</MenuItem>
                        <MenuItem value={'Semestral'}>Semestral</MenuItem>
                        <MenuItem value={'Cuatrimestral'}>Cuatrimestral</MenuItem>
                        <MenuItem value={'Otro'}>Otro</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
        <InputLabel id="demo-simple-select-label">
                Forma y oportunidad del pago:
        </InputLabel>
        <div className="boxTwo">
            <FormControl variant="outlined" className="typeFault" required>
                <InputLabel id="tipoFalta">
                    Forma y oportunidad del pago:
                </InputLabel>
                <Select labelId="tipo-falta-label" id="tipoFaltaSelect">
                    <MenuItem value={'Mensual'}>Mensual</MenuItem>
                    <MenuItem value={'Por hito'}>Por hito</MenuItem>
                </Select>
            </FormControl>
        </div>
        <div className="bottomBox">
            <div className="boxOne">
                <Button variant="contained" color="secondary" type="submit">
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

export default PlazoTarifa;
