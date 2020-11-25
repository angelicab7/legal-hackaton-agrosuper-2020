import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import SelectUser from './containers/SelectUserView';
import NotFoundPage from './containers/NotFound';
import ChoiceForm from './containers/ChoiceForm';
import Lawyers from './containers/Lawyers'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user" exact component={SelectUser} />
        <Route path="/preguntas" component={ChoiceForm} />
        <Route path="/lawyers" component={Lawyers} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default App;
