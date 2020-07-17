import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: start;
    position: absolute;
    margin-left: 9%;
  }
`;

export const NavBar = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 24px;
  color: #1d2026;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 5%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
`;

export const Input = styled.input`
  width: 100%;
  height: 25px;
  @media (min-width: 768px) {
    height: 20px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 50px;
  @media (min-width: 768px) {
    height: 40px;
  }
`;

export const Label = styled.label`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #1d2026;
  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const InputFont = styled.h3`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #1d2026;
  width: 100%;
  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const ShareBox = styled.div`
display: flex;
align items: center;
margin-bottom: 40%;
@media (min-width: 768px) {
    margin-bottom: 20%;
  }
`;

export const ShareLabel = styled.label`
  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border-radius: 30px;
  width: 60%;
  height: 45px;
  background-color: #1d2026;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #f6f6f6;
  @media (min-width: 768px) {
    height: 35px;
    text-align: center;
  }
`;
