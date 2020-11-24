import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Card className="w100">
      <CardContent>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          className="margin-b-one"
        >
          Bienvenido
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            name="username"
            label="Usuario"
            variant="outlined"
            inputRef={register}
            required
            fullWidth
            className="margin-b-one"
          />
          <TextField
            name="password"
            type="password"
            label="Contraseña"
            variant="outlined"
            inputRef={register}
            required
            fullWidth
            className="margin-b-one"
          />
          <Box display="flex" justifyContent="center">
            <Button variant="contained" color="Primary" type="submit">
              Iniciar sesión
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
