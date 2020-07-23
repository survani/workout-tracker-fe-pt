import Styled from "styled-components";
import styled from "styled-components";

// Profile Info Section

export const Container = styled.section`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const FormContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 1.5rem;
`;

export const ProfileAside = styled.aside`
  border-right: 2px solid #dddddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 1rem;
`;

export const AsideTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-top: 3.5rem;
  margin-bottom: 2.5rem;
`;

export const ChangePhotoButton = styled.button`
  width: 316px;
  height: 56px;
  left: 49px;
  top: 668px;
  background: #277fe5;
  border-radius: 15px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: white;
  font-family: Montserrat;
  margin-top: 8rem;
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 1rem;
`;

export const Bio = styled.p`
  font-size: 14px;
`;
