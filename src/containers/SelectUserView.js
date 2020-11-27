import React from 'react';
import Footer from '../components/Footer';
import SelectUser from '../components/SelectUser/SelectUser';
import CenteredBox from '../components/CenteredBox';

const SelectUserView = () => (
  <CenteredBox>
    <SelectUser />
    <Footer />
  </CenteredBox>
);

export default SelectUserView;
