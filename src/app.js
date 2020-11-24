import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import NotFoundPage from './containers/NotFound';
import ChoiceForm from './containers/ChoiceForm';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/preguntas" component={ChoiceForm} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default App;
