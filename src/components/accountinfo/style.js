import styled from "styled-components";

export const ButtonSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;

  @media (min-width: 768px) {
    margin-top: 5rem;
    align-items: start;
    margin-left: 20rem;
  }
`;

export const InfoButtons = styled.button`
  display: flex;
  width: 21rem;
  height: 3.2rem;
  font-size: 16px;
  border: none;
  padding: 0.5%;
  margin-top: 1%;
  justify-content: space-between;
  border-radius: 5px;
  align-items: center;
  @media (min-width: 768px) {
    height: 2.2rem;
    &:hover {
      background: #d5d5d5;
    }
  }
`;

export const ApplyTextAnchor = styled.a`
  color: #277fe5;
  margin-top: 45px;
  text-decoration: none;
  &:hover {
    font-weight: bold;
  }
  @media (min-width: 768px) {
  }
`;
