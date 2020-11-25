import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import NavBar from './components/NavBar';
import Home from './containers/Home';
import SelectUser from './containers/SelectUserView';
import NotFoundPage from './containers/NotFound';
import ChoiceForm from './containers/ChoiceForm';

class App extends Component {
  render() {
    return (
      <Box display="flex" flexDirection="column" className="app-container">
        <NavBar />
        <Box display="flex" flexGrow={1}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/user" exact component={SelectUser} />
            <Route path="/preguntas" component={ChoiceForm} />
            <Route component={NotFoundPage} />
          </Switch>
        </Box>
      </Box>
    );
  }
}

export default App;
