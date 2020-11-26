import React, { useContext } from 'react';

// Components
import PageLoader from '../PageLoader';
import AuthContext from './AuthContext';

/* eslint-disable react/prefer-stateless-function */
const withAuth = (ChildrenView) => (props) => {
  const authContext = useContext(AuthContext);
  if (authContext.status === 'PENDING') {
    return <PageLoader />;
  }

  return (
    <ChildrenView
      {...props}
      authContext={authContext}
      isAuthenticated={authContext.status === 'AUTHORIZED'}
    />
  );
};

export default withAuth;
