import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import logo from '../assets/images/logo-header.svg';

export const PageLoader = ({ children }) => (
  <div className="page-loader">
    <CircularProgress className="margin-b-one" />
    {children && <div className="margin-b-one">{children}</div>}
    <img width={200} src={logo} alt="Agro Super logo" />
  </div>
);

export default PageLoader;
