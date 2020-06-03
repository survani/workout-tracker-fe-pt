import React from 'react';
import LandingNav from '../../containers/landingnav/landingnav';
import Intro from '../../containers/intro/Intro';
import { MainContainer } from './style';

const LandingPage = () => {
  return (
    <MainContainer>
      <LandingNav />
      <Intro />
    </MainContainer>
  );
};

export default LandingPage;
