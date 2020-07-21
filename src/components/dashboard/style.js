import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Dashboard = styled.section`
  width: 63%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 769px) {
    display: none;
  }
`;

export const WelcomeTitle = styled.p`
  font-size: 1.5rem;
  padding-top: 5%;
`;

export const Image = styled.img`
  width: 80%;
  margin: 0 auto;
`;

export const NavigationContainer = styled.aside`
  padding-top: 3%;
  float: left;
  height: 1500px;
  width: 18rem;
  background: #e8e8e8;
  @media (max-width: 769px) {
    display: none;
  }
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  padding-bottom: 10%;
  color: black;
  margin-left: 3.5rem;
  font-size: 1.2rem;
  :hover {
    font-weight: 800;
    color: #277fe5;
    transition: 0.3s;
  }
  &.active {
    color: #277fe5;
    font-weight: 800;
  }
`;

export const Nav = styled.div`
  font-family: Montserrat;
  display: flex;
  padding-top: 2%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #000;
`;

export const Logo2 = styled.h2`
  text-align: center;
  margin-bottom: 50%;
  font-weight: 800;
  font-size: 2rem;
  color: #000;
`;

export const LogoText2 = styled.span`
  font-size: 2rem;
  color: #277fe5;
`;

export const DashboardAlignment = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;
export const MobileButton = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DashboardButtonText = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: #277fe5;
  color: white;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: bold;
  border-radius: 100px;
  width: 307px;
  height: 63px;
  margin: 5%;
`;

export const LogoContainer = styled.div`
  margin-bottom: 10%;
  font-size: 3rem;
`;

export const Logo = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 800;
  color: #000;
`;

export const LogoText = styled.h1`
  margin-bottom: 5%;
  font-weight: 800;
  color: #277fe5;
`;
