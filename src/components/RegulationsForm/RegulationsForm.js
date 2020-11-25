import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Box,
  Button,
} from '@material-ui/core';
// import Button from '../Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 60,
  },
}));

const RegulationsForm = () => {
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

  const sendForm = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={sendForm}>
        <h6>Exigencias medioambientales</h6>
        <FormControl className={classes.formControl}>
          <InputLabel>Si/No</InputLabel>
          <Select
            labelId="select-id"
            id="yes-ex"
            value={environmental}
            onChange={handleChange}
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
          required
        />

        <h6>Certificaciones requeridas</h6>
        <FormControl className={classes.formControl}>
          <InputLabel>Si/No</InputLabel>
          <Select
            labelId="select-id"
            id="yes-cr"
            value={certifications}
            onChange={handleChange1}
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
        />

        <h6>Licencia de conducir</h6>
        <FormControl className={classes.formControl}>
          <InputLabel>Si/No</InputLabel>
          <Select
            labelId="select-id"
            id="yes-lc"
            value={license}
            onChange={handleChange2}
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
          required
        />

        <h6>Cursos especiales</h6>
        <FormControl className={classes.formControl}>
          <InputLabel>Si/No</InputLabel>
          <Select
            labelId="select-id"
            id="yes-ce"
            value={courses}
            onChange={handleChange3}
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
          required
        />

        <h6>Otros</h6>
        <FormControl className={classes.formControl}>
          <InputLabel>Si/No</InputLabel>
          <Select
            labelId="select-id"
            id="yes-o"
            value={others}
            onChange={handleChange4}
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
          required
        />
        <Box display="flex" justifyContent="center" className="w100">
          <Button variant="contained" color="primary" type="submit">
            Siguiente
          </Button>
        </Box>
      </form>
    </Container>
  );
};
export default RegulationsForm;
