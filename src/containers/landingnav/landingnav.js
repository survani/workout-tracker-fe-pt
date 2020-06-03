import React from 'react';
import { NavSection, Logo, LogoText, SignIn } from './style';

const LandingNav = () => {
  return (
    <>
      <NavSection>
        <Logo>
          Fit<LogoText>Tracker</LogoText>
        </Logo>
        <SignIn>Sign In</SignIn>
      </NavSection>
    </>
  );
};

export default LandingNav;
