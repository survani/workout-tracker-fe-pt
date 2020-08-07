import styled from "styled-components";
// ----- Page Sections -----
export const IntroSection = styled.section`
  @media (min-width: 768px) {
    display: flex;
    border-bottom: 2px solid #dddddd;
  }
`;

export const FormSection = styled.section`
  @media (min-width: 768px) {
    margin-left: 44rem;
  }
`;
// ----- Page Containers -----

export const InformationContent = styled.div`
  @media (min-width: 768px) {
    width: 40%;
    margin: 0 7rem 0rem 10rem;
  }
`;

export const ImageContainer = styled.div`
  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;

export const FormContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const FormHeader = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`;

export const InnerForm = styled.div`
  @media (min-width: 768px) {
    margin-right: 1rem;
    width: 50%;
  }
`;

export const ButtonMobileContainer = styled.div`
  @media (min-width: 768px) {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
`;

export const Form = styled.form`
  @media (min-width: 768px) {
    margin: 0 auto;
    width: 50%;
  }
`;

// ----- Page Text -----

export const InfoText = styled.p`
  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 3rem;
    line-height: 22px;
  }
`;

export const InfoTitle = styled.h2`
  @media (min-width: 768px) {
    font-size: 24px;
    margin: 3rem 0 4rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PageTitle = styled.h1`
  @media (min-width: 768px) {
    font-size: 24px;
    font-weight: 500;
    margin: 3rem 0rem 3.5rem 0rem;
  }
`;

// ----- Page Form Inner -----
export const Input = styled.input`
  border: none;
  @media (min-width: 768px) {
    width: 100%;
    height: 40px;
    margin: 10px 0 35px 0;
    border-radius: 5px;
    }
    
  }
`;

export const Label = styled.label`
  @media (min-width: 768px) {
    font-weight: 500;
  }
`;

export const ButtonMobileIntro = styled.button`
  @media (min-width: 768px) {
    border: none;
    background: #277fe5;
    color: white;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: bold;
    border-radius: 16px;
    width: 300px;
    height: 51px;
    margin: 5rem 0rem 5rem 58rem;
  }
`;

// ----- Image CSS -----

export const Badge = styled.img`
  @media (min-width: 768px) {
    margin-left: 10px;
  }
`;

export const LeftArrowNavigate = styled.img`
  @media (min-width: 768px) {
    margin: 50px 0 0 50px;
  }
`;
