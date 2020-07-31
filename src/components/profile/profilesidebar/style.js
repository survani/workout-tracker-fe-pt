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

export const UsernameContainer = styled.div`
display: flex;
align-items: baseline;
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
  margin: 5rem 0 1rem 0;
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 1rem 0.5rem 0.7rem 0;
`;

export const Bio = styled.p`
  font-size: 14px;
`;

export const Links = styled.a`
  color: #277fe5;
  text-decoration: none;
  font-weight: 600;
`;
