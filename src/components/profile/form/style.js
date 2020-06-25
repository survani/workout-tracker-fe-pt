import styled from "styled-components";

// Mobile First

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding: 5%;
  justify-content: center;
  @media (min-width: 768px) {
    width: 50%;
    margin: 0 auto;
  }
`;

export const PageTitle = styled.h1`
  text-align: center;
  font-weight: 600;
  margin-top: 1rem;
`;

export const Input = styled.input`
  padding: 3%;
  margin-bottom: 1rem;
  border: none;
  @media (min-width: 768px) {
    padding: 2%;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  margin-bottom: 0.5rem;
  @media (min-width: 768px) {
    margin-top: 1rem;
  }
`;

export const ButtonMobileIntro = styled.button`
  border: none;
  background: #277fe5;
  color: white;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: bold;
  border-radius: 100px;
  width: 158px;
  height: 44px;
`;

export const ButtonMobileContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
  }
`;
