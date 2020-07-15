import styled from "styled-components";

export const Nav = styled.div`
  /* border: 1px solid red; */
  font-family: Montserrat;
  display: flex;
  height: 100vh;
  width: 10%;
  flex-direction: column;
  background: #e6e6e6;
  padding-left: 2%;
  padding-top: 2%;
  text-align: left;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: Montserrat;
  background: #e6e6e6;
  width: 10%;
  padding-right: 2%;
`;

export const Logo = styled.h2`
  margin-left: 10px;
  font-weight: 800;
  font-size: 24px;
  color: #000;
`;

export const LogoText = styled.span`
  color: #277fe5;
`;
