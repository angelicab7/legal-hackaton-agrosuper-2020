import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Route, Switch } from 'react-router-dom';

// Components
import DependencySelector from '../components/ChoiceForm/DependencySelector';
import ServicesFaults from '../components/ChoiceForm/ServicesFaults';
import PlazoTarifa from '../components/ChoiceForm/PlazoTarifa';
import logo from '../assets/images/logo-header.svg';

const ChoicesForm = () => (
  <div className="home-container">
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className="centered-box-container"
      >
        <Box display="flex" justifyContent="center" className="margin-b-two">
          <img src={logo} alt="AgroSuper Logo" />
        </Box>
        <Card className="w100">
          <CardContent>
            <Switch>
              <Route
                path="/preguntas/dependencia"
                component={DependencySelector}
              />
              <Route
                path="/preguntas/serviciosyfaltas"
                component={ServicesFaults}
              />
              <Route
                path="/preguntas/plazoytarifas"
                component={PlazoTarifa}
              />
            </Switch>
          </CardContent>
        </Card>
      </Box>
    </Container>
  </div>
);

export default ChoicesForm;
