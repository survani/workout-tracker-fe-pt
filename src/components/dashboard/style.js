import styled from "styled-components";

export const NavigationContainer = styled.div`
  @media (max-width: 769px) {
    display: none;
  }
`;
export const Nav = styled.div`
  font-family: Montserrat;
  display: flex;
  height: 100vh;
  width: 15%;
  flex-direction: column;
  background: #e8e8e8;
  padding-left: 3.5%;
  padding-top: 2%;
  text-align: left;
`;

export const LogoContainer2 = styled.div`
  display: flex;
  justify-content: center;
  font-family: Montserrat;
  background: #e8e8e8;
  width: 15%;
  padding-right: 3.5%;
  padding-top: 2%;
`;

export const Logo2 = styled.h2`
  margin-left: 10px;
  font-weight: 800;
  font-size: 24px;
  color: #000;
`;

export const LogoText = styled.span`
  color: #277fe5;
`;

export const DashboardAlignment = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const DashboardButtonText = styled.button`
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
  border: 1px solid black;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  @media (mid-width: 768px) {
    margin-bottom: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: #277fe5;
  @media (min-width: 768px) {
    font-weight: 800;
    font-size: 48px;
    margin: 1%;
  }
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: bold;
  @media (min-width: 768px) {
    margin: 1rem 0 rem;
  }
`;
