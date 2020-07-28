import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 50%;
    margin: 0 auto;
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
  font-size: 2rem;
  line-height: 24px;
  color: #1d2026;
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
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 50px;
`;

export const Label = styled.label`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #1d2026;
`;

export const InputFont = styled.h3`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #1d2026;
  width: 100%;
`;

export const ShareBox = styled.div`
display: flex;
align items: center;
margin-bottom: 40%;
@media (min-width: 768px) {
    margin-bottom: 20%;
  }
`;

export const ShareLabel = styled.label``;

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
