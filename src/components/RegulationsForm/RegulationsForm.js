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
  // Modal,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 100,
  },
}));

const RegulationsForm = () => {
  const { valuesForm, handleSubmit } = useForm();

  const classes = useStyles();

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

  const sendForm = (event, data) => {
    // event.preventDefault();
    console.log(data, event);
  };

  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const bodyModal = (
  //   <div>
  //     <h2 id="simple-modal-title">Text in a modal</h2>
  //     <p id="simple-modal-description">
  //       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //     </p>
  //   </div>
  // );

  return (
    <Container>
      <h2>Cumplimiento de Normativa:</h2>
      <form onSubmit={handleSubmit(sendForm)}>
        <InputLabel>Exigencias Medioambientales</InputLabel>
        <div className="reg-select">
          <FormControl className={classes.formControl}>
            <InputLabel>Si/No</InputLabel>
            <Select
              labelId="select-id"
              id="yes-ex"
              value={environmental}
              onChange={handleChange}
              className="select-sino"
              size="small"
              inputRef={valuesForm}
              required
            >
              <MenuItem value="Si">Si</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name=""
            type="text"
            label="¿Cuáles?"
            variant="outlined"
            className="margin-b-one"
            size="small"
            inputRef={valuesForm}
            required
            fullWidth
          />
        </div>

        <InputLabel>Certificaciones requeridas</InputLabel>
        <div className="reg-select">
          <FormControl className={classes.formControl}>
            <InputLabel>Si/No</InputLabel>
            <Select
              labelId="select-id"
              id="yes-cr"
              value={certifications}
              onChange={handleChange1}
              size="small"
              inputRef={valuesForm}
              required
            >
              <MenuItem value="Si">Si</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="input-certifications"
            type="text"
            label="¿Cuáles?"
            variant="outlined"
            className="margin-b-one"
            required
            size="small"
            inputRef={valuesForm}
            fullWidth
          />
        </div>

        <InputLabel>Licencia de conducir</InputLabel>
        <div className="reg-select">
          <FormControl className={classes.formControl}>
            <InputLabel>Si/No</InputLabel>
            <Select
              labelId="select-id"
              id="yes-lc"
              value={license}
              onChange={handleChange2}
              size="small"
              inputRef={valuesForm}
              required
            >
              <MenuItem value="Si">Si</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="input-license"
            type="text"
            label="¿Cuáles?"
            variant="outlined"
            className="margin-b-one"
            size="small"
            inputRef={valuesForm}
            required
            fullWidth
          />
        </div>

        <InputLabel>Cursos especiales</InputLabel>
        <div className="reg-select">
          <FormControl className={classes.formControl}>
            <InputLabel>Si/No</InputLabel>
            <Select
              labelId="select-id"
              id="yes-ce"
              value={courses}
              onChange={handleChange3}
              size="small"
              inputRef={valuesForm}
              required
            >
              <MenuItem value="Si">Si</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="input-courses"
            type="text"
            label="¿Cuáles?"
            variant="outlined"
            className="margin-b-one"
            size="small"
            inputRef={valuesForm}
            required
            fullWidth
          />
        </div>

        <InputLabel>Otros</InputLabel>
        <div className="reg-select">
          <FormControl className={classes.formControl}>
            <InputLabel>Si/No</InputLabel>
            <Select
              labelId="select-id"
              id="yes-o"
              value={others}
              onChange={handleChange4}
              size="small"
              inputRef={valuesForm}
              required
            >
              <MenuItem value="Si">Si</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="input-others"
            type="text"
            label="¿Cuáles?"
            variant="outlined"
            className="margin-b-one"
            size="small"
            inputRef={valuesForm}
            required
            fullWidth
          />
        </div>
        <div className="ctn-button">
          <Box display="flex" justifyContent="center" className="w100">
            <Button variant="contained" color="secondary" type="submit">
              Volver
            </Button>
          </Box>
          <Box display="flex" justifyContent="center" className="w100">
            <Button variant="contained" color="primary" type="submit">
              Siguiente
            </Button>
          </Box>
          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {bodyModal}
          </Modal> */}
        </div>
      </form>
    </Container>
  );
};
export default RegulationsForm;
