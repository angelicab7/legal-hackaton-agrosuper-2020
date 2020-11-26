import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Route, Switch, useHistory } from 'react-router-dom';
import ContractorsForm from '../components/ContractorsForm/ContractorsForm';
import ServicesForm from '../components/ServicesForm/ServicesForm';
// Components
import DependencySelector from '../components/ChoiceForm/DependencySelector';
import ServicesFaults from '../components/ChoiceForm/ServicesFaults';
import PlazoTarifa from '../components/ChoiceForm/PlazoTarifa';
import RegulationsForm from '../components/RegulationsForm/RegulationsForm';
import CenteredBox from '../components/CenteredBox';

const ChoicesForm = () => {
  const [answers, setAnswers] = useState({});
  const { push } = useHistory();

  const onNextDependencySelector = (data) => {
    setAnswers((previousAnswers) => ({ ...previousAnswers, ...data }));
    push('/preguntas/contratistas');
  };

  const onNextContractorsForm = (data) => {
    setAnswers((previousAnswers) => ({ ...previousAnswers, ...data }));
    push('/preguntas/servicios');
  };

  const onNextServicesForm = (data) => {
    setAnswers((previousAnswers) => ({ ...previousAnswers, ...data }));
    push('/preguntas/serviciosyfaltas');
  };

  const onNextServicesFaults = (data) => {
    setAnswers((previousAnswers) => ({ ...previousAnswers, ...data }));
    push('/preguntas/plazoytarifas');
  };

  const onNextPlazoTarifa = (data) => {
    setAnswers((previousAnswers) => ({ ...previousAnswers, ...data }));
    push('/preguntas/otras');
  };

  const onNextOtras = (data) => {
    setAnswers((previousAnswers) => ({ ...previousAnswers, ...data }));
  };

  // eslint-disable-next-line no-console
  console.log(answers);

  return (
    <CenteredBox className="margin-y-two">
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
            <Route
              path="/preguntas/contratistas"
              render={(props) => (
                <ContractorsForm {...props} onNext={onNextContractorsForm} />
              )}
            />
            <Route
              path="/preguntas/servicios"
              render={(props) => (
                <ServicesForm {...props} onNext={onNextServicesForm} />
              )}
            />
            <Route
              path="/preguntas/serviciosyfaltas"
              render={(props) => (
                <ServicesFaults {...props} onNext={onNextServicesFaults} />
              )}
            />
            <Route
              path="/preguntas/plazoytarifas"
              render={(props) => (
                <PlazoTarifa {...props} onNext={onNextPlazoTarifa} />
              )}
            />
            <Route
              path="/preguntas/otras"
              render={(props) => (
                <RegulationsForm {...props} onNext={onNextOtras} />
              )}
            />
          </Switch>
        </CardContent>
      </Card>
    </CenteredBox>
  );
};

export default ChoicesForm;
