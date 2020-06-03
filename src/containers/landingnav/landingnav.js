import React from 'react';
import { NavSection, LogoText, SignIn } from './style';

const LandingNav = () => {
  return (
    <>
      <NavSection>
        <h2>
          Fit<LogoText>Tracker</LogoText>
        </h2>
        <SignIn>Sign In</SignIn>
      </NavSection>
    </>
  );
};

export default LandingNav;
