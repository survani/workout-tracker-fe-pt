import styled from "styled-components";

export const ButtonSection = styled.section`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    margin-left: 20rem;
  }
`;

export const InfoButtons = styled.button`
  @media (min-width: 768px) {
    display: flex;
    width: 21rem;
    height: 2.2rem;
    font-size: 16px;
    border: none;
    padding: 0.5%;
    margin-top: 1%;
    justify-content: space-between;
    border-radius: 5px;
    &:hover {
      background: #d5d5d5;
    }
  }
`;

export const ApplyTextAnchor = styled.a`
  @media (min-width: 768px) {
    color: #277fe5;
    margin-top: 45px;
    text-decoration: none;
    &:hover {
      font-weight: bold;
    }
  }
`;
