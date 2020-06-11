import React from 'react';
import { NavSection, Logo, LogoText, SignIn } from './style';

const LandingNav = () => {
  return (
    <>
      <NavSection>
        <Logo>
          Fit<LogoText>Tracker</LogoText>
        </Logo>
        <a href="/account">
          <SignIn>Sign In</SignIn>
        </a>
      </NavSection>
    </>
  );
};

export default LandingNav;
