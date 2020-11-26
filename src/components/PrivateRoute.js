import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import withAuth from './Auth/withAuth';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (isAuthenticated) {
        return <Component {...props} />;
      }
      return <Redirect to="/" />;
    }}
  />
);

export default withRouter(withAuth(PrivateRoute));
