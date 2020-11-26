import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import {
  Container,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Box,
  Button,
  Modal,
} from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 100,
  },
}));

const RegulationsForm = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const { register, handleSubmit } = useForm();

  const [environmental, setEnvironmental] = React.useState('');
  const [certifications, setCertifications] = React.useState('');
  const [license, setLicense] = React.useState('');
  const [courses, setCourses] = React.useState('');
  const [others, setOthers] = React.useState('');

  const handleChange = (event) => {
    setEnvironmental(event.target.value);
  };
  const handleChange1 = (event) => {
    setCertifications(event.target.value);
  };
  const handleChange2 = (event) => {
    setLicense(event.target.value);
  };
  const handleChange3 = (event) => {
    setCourses(event.target.value);
  };
  const handleChange4 = (event) => {
    setOthers(event.target.value);
  };

  const sendForm = (data) => {
    // event.preventDefault();
    console.log(data);
    handleOpen();
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const bodyModal = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Tu solicitud se ha enviado correctamente</h2>
      <p id="simple-modal-description">
        Tu solicitud de contrato <span>Nº001</span> se envio correctamente. Para
        mayor detalle favor revisa en tu bandeja de correo electrónico.
      </p>
    </div>
  );

  return (
    <Container>
      <h2>Cumplimiento de Normativa:</h2>
      <form
        onSubmit={handleSubmit(sendForm)}
        ref={register({ required: true })}
      >
        <InputLabel>Exigencias Medioambientales</InputLabel>
        <div className="reg-select">
          <FormControl className={classes.formControl}>
            <InputLabel>Si/No</InputLabel>
            <Select
              name="environmentalSelect"
              labelId="select-id"
              id="yes-ex"
              value={environmental}
              onChange={handleChange}
              className="select-sino"
              size="small"
              inputRef={register({ required: true })}
              required
            >
              <MenuItem value="Si">Si</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="environmentalInput"
            type="text"
            label="¿Cuáles?"
            variant="outlined"
            className="margin-b-one"
            size="small"
            inputRef={register({ required: true })}
            required
            fullWidth
          />
        </div>

        <InputLabel>Certificaciones requeridas</InputLabel>
        <div className="reg-select">
          <FormControl className={classes.formControl}>
            <InputLabel>Si/No</InputLabel>
            <Select
              name="certificationsSelect"
              labelId="select-id"
              id="yes-cr"
              value={certifications}
              onChange={handleChange1}
              size="small"
              inputRef={register({ required: true })}
              required
            >
              <MenuItem value="Si">Si</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="certificationsInput"
            type="text"
            label="¿Cuáles?"
            variant="outlined"
            className="margin-b-one"
            required
            size="small"
            inputRef={register({ required: true })}
            fullWidth
          />
        </div>

        <InputLabel>Licencia de conducir</InputLabel>
        <div className="reg-select">
          <FormControl className={classes.formControl}>
            <InputLabel>Si/No</InputLabel>
            <Select
              name="licenseSelect"
              labelId="select-id"
              id="yes-lc"
              value={license}
              onChange={handleChange2}
              size="small"
              inputRef={register({ required: true })}
              required
            >
              <MenuItem value="Si">Si</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="licenseInput"
            type="text"
            label="¿Cuáles?"
            variant="outlined"
            className="margin-b-one"
            size="small"
            inputRef={register({ required: true })}
            required
            fullWidth
          />
        </div>

        <InputLabel>Cursos especiales</InputLabel>
        <div className="reg-select">
          <FormControl className={classes.formControl}>
            <InputLabel>Si/No</InputLabel>
            <Select
              name="coursesSelect"
              labelId="select-id"
              id="yes-ce"
              value={courses}
              onChange={handleChange3}
              size="small"
              inputRef={register({ required: true })}
              required
            >
              <MenuItem value="Si">Si</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="coursesInput"
            type="text"
            label="¿Cuáles?"
            variant="outlined"
            className="margin-b-one"
            size="small"
            inputRef={register({ required: true })}
            required
            fullWidth
          />
        </div>

        <InputLabel>Otros</InputLabel>
        <div className="reg-select">
          <FormControl className={classes.formControl}>
            <InputLabel>Si/No</InputLabel>
            <Select
              name="othersSelect"
              labelId="select-id"
              id="yes-o"
              value={others}
              onChange={handleChange4}
              size="small"
              inputRef={register({ required: true })}
              required
            >
              <MenuItem value="Si">Si</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="othersSelect"
            type="text"
            label="¿Cuáles?"
            variant="outlined"
            className="margin-b-one"
            size="small"
            inputRef={register({ required: true })}
            required
            fullWidth
          />
        </div>
        <div className="ctn-button">
          <Box display="flex" justifyContent="center" className="w100">
            <Button variant="contained" color="secondary" type="button">
              Volver
            </Button>
          </Box>
          <Box display="flex" justifyContent="center" className="w100">
            <Button variant="contained" color="primary" type="submit">
              Finalizar
            </Button>
          </Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {bodyModal}
          </Modal>
        </div>
      </form>
    </Container>
  );
};
export default RegulationsForm;
