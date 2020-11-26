import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import firebase from 'firebase/app';

// Components
import AuthContext from './components/Auth/AuthContext';
import NavBar from './components/NavBar';
import Home from './containers/Home';
import SelectUser from './containers/SelectUserView';
import NotFoundPage from './containers/NotFound';
import ChoiceForm from './containers/ChoiceForm';
import Lawyers from './containers/Lawyers';
import PageLoader from './components/PageLoader';
import PrivateRoute from './components/PrivateRoute';
import LogoutPage from './containers/LogoutPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authState: {
        status: 'PENDING',
        isLoading: false,
        token: null,
        session: {},
      },
    };
  }

  componentDidMount() {
    this.checkSession();
  }

  checkSession = () => {
    const auth = firebase.auth();

    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        this.setAuthData({
          status: 'AUTHORIZED',
          isLoading: false,
          token,
          session: user,
        });
      } else {
        this.setAuthData({
          status: 'UNAUTHORIZED',
          isLoading: false,
          token: null,
          session: {},
        });
      }
    });
  };

  setAuthData = (authData) => {
    this.setState(({ authState }) => ({
      authState: {
        ...authState,
        ...authData,
      },
    }));
  };

  render() {
    const {
      authState: { isLoading, session, status, token },
    } = this.state;

    if (status === 'PENDING') {
      return <PageLoader />;
    }

    console.log(this.state.authState, '------------');

    return (
      <AuthContext.Provider
        value={{
          isLoading,
          session,
          status,
          token,
          setAuthData: this.setAuthData,
        }}
      >
        <Box display="flex" flexDirection="column" className="app-container">
          <NavBar />
          <Box display="flex" flexGrow={1}>
            <Switch>
              <Route path="/" exact component={Home} />
              <PrivateRoute path="/user" exact component={SelectUser} />
              <PrivateRoute path="/preguntas" component={ChoiceForm} />
              <PrivateRoute path="/lawyers" component={Lawyers} />
              <Route exact path="/logout" component={LogoutPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Box>
        </Box>
      </AuthContext.Provider>
    );
  }
}

export default App;
