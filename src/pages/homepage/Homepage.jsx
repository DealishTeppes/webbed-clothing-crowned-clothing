import React from 'react';

import Directory from '../../components/directory/directory';
import { HomePageContainer } from './homepage.styles';

const HomePage = ({ history }) => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
