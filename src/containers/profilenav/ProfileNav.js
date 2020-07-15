import React from "react";
import { NavSection, Logo, LogoText, SignIn } from "../landingnav/style";
import { Link } from "react-router-dom";

const ProfileNav = () => {
  const Logout = () => {
    localStorage.clear();
  };
  return (
    <>
      <NavSection>
        <Logo>
          <LogoText>Profile</LogoText>
        </Logo>
        <Link on onClick={Logout} to="/">
          <SignIn>Sign Out</SignIn>
        </Link>
      </NavSection>
    </>
  );
};

export default ProfileNav;
