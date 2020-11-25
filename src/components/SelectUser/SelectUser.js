import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

const SelectUser = () => {
  //   const onSubmit = (data) => {
  //     console.log(data);
  // };
  return (
    <Card className="w100">
      <CardContent>
        <Typography
          variant="h5"
          component="h1"
          align="left"
          className="margin-b-one"
        >
          Por favor indicanos quién eres:
        </Typography>
        <Box display="flex" justifyContent="center" className="w100">
          <Button variant="contained" color="secondary" type="submit" fullWidth className='spaceButtonUser buttonUsers'>
            Abogado
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" className="w100">
          <Button variant="contained" color="secondary" type="submit" fullWidth className='spaceButtonUser buttonUsers'>
            Cliente
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
export default SelectUser;