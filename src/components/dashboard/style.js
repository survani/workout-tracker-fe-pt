import styled from "styled-components";

export const DashboardAlignment = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  margin-bottom: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
