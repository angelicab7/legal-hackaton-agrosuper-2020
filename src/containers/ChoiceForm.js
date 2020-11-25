import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Route, Switch, useHistory } from 'react-router-dom';

// Components
import DependencySelector from '../components/ChoiceForm/DependencySelector';
import logo from '../assets/images/logo-header.svg';

const ChoicesForm = () => {
  const [answers, setAnswers] = useState({});
  const { push } = useHistory();

  const onNextDependencySelector = (data) => {
    setAnswers((previousAnswers) => ({ ...previousAnswers, ...data }));
    push('/'); // Change this by the route of the next set of questions
  };

  console.log(answers);

  return (
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
          <Card className="w100" variant="outlined">
            <CardContent>
              <Switch>
                <Route
                  path="/preguntas/dependencia"
                  render={(props) => (
                    <DependencySelector
                      {...props}
                      onNext={onNextDependencySelector}
                    />
                  )}
                />
              </Switch>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default ChoicesForm;
