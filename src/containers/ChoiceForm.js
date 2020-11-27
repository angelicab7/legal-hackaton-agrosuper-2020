import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Route, Switch, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import ContractorsForm from '../components/ContractorsForm/ContractorsForm';
import ServicesForm from '../components/ServicesForm/ServicesForm';
// Components
import DependencySelector from '../components/ChoiceForm/DependencySelector';
import ServicesFaults from '../components/ChoiceForm/ServicesFaults';
import PlazoTarifa from '../components/ChoiceForm/PlazoTarifa';
import RegulationsForm from '../components/RegulationsForm/RegulationsForm';
import Finalize from '../components/FinalizeForm/Finalize';
import CenteredBox from '../components/CenteredBox';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';

const ChoicesForm = () => {
  const [answers, setAnswers] = useState({});
  const [sendData, setSendData] = useState(false);
  const { push } = useHistory();
  const [testData, setTest] = useState({ bgcolor: '#002089', completed: 0 });

  const onNextDependencySelector = (data) => {
    setAnswers((previousAnswers) => ({ ...previousAnswers, ...data }));
    setTest({ bgcolor: '#002089', completed: 20 });
    push('/preguntas/contratistas');
  };

  const onNextContractorsForm = (data) => {
    setAnswers((previousAnswers) => ({ ...previousAnswers, ...data }));
    setTest({ bgcolor: '#002089', completed: 40 });
    push('/preguntas/servicios');
  };

  const onNextServicesForm = (data) => {
    setAnswers((previousAnswers) => ({ ...previousAnswers, ...data }));
    setTest({ bgcolor: '#002089', completed: 60 });
    push('/preguntas/serviciosyfaltas');
  };

  const onNextServicesFaults = (data) => {
    setAnswers((previousAnswers) => ({ ...previousAnswers, ...data }));
    setTest({ bgcolor: '#002089', completed: 80 });
    push('/preguntas/plazoytarifas');
  };

  const onNextPlazoTarifa = (data) => {
    setAnswers((previousAnswers) => ({ ...previousAnswers, ...data }));
    setTest({ bgcolor: '#002089', completed: 100 });
    push('/preguntas/otras');
  };

  const onNextOtras = async (data) => {
    setAnswers((previousAnswers) => ({ ...previousAnswers, ...data }));
    push('/preguntas/finalize');
    setSendData(true);
  };

  // Guarda la fecha en la que es creada la solicitud
  const currentDate = () => {
    let date = new Date();
    const day = date.getDate();
    const month = (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1);
    const year = date.getFullYear();
    date = `${year}/${month}/${day}`;
    return date;
  };

  const sendDataToFirebase = async () => {
    const db = firebase.firestore();
    await db
      .collection('pedidos')
      .doc()
      .set({
        date: currentDate(),
        ...answers,
      });
  };

  useEffect(() => {
    if (sendData) {
      sendDataToFirebase();
    }
  }, [answers, sendData]);

  // eslint-disable-next-line no-console
  console.log(answers);

  return (
    <CenteredBox className="margin-y-two">
      <ProgressBar
        key={testData.completed}
        bgcolor={testData.bgcolor}
        completed={testData.completed}
      />
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
                <ContractorsForm
                  {...props}
                  onNext={onNextContractorsForm}
                  handler={setTest}
                />
              )}
            />
            <Route
              path="/preguntas/servicios"
              render={(props) => (
                <ServicesForm
                  {...props}
                  onNext={onNextServicesForm}
                  handler={setTest}
                />
              )}
            />
            <Route
              path="/preguntas/serviciosyfaltas"
              render={(props) => (
                <ServicesFaults
                  {...props}
                  onNext={onNextServicesFaults}
                  handler={setTest}
                />
              )}
            />
            <Route
              path="/preguntas/plazoytarifas"
              render={(props) => (
                <PlazoTarifa
                  {...props}
                  onNext={onNextPlazoTarifa}
                  handler={setTest}
                />
              )}
            />
            <Route
              path="/preguntas/otras"
              render={(props) => (
                <RegulationsForm
                  {...props}
                  onNext={onNextOtras}
                  handler={setTest}
                />
              )}
            />
            <Route
              path="/preguntas/finalize"
              render={(props) => (
                <Finalize {...props} onNext={onNextOtras} handler={setTest} />
              )}
            />
          </Switch>
        </CardContent>
      </Card>
      <Footer />
    </CenteredBox>
  );
};

export default ChoicesForm;
