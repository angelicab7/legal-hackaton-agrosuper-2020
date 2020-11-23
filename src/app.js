import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import NotFoundPage from './containers/NotFound';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default App;
