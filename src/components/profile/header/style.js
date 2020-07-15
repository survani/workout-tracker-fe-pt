import styled from "styled-components";

export const InfoSection = styled.section`
  border-bottom: 6px solid white;
`;
export const TextContainer = styled.div`
  background: #277fe5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
`;

export const Text = styled.p`
  color: white;
  font-weight: 500;
  font-family: Montserrat;
  margin-top: 0.5rem;
`;

export const Image = styled.img`
  width: 100px;
  border-radius: 100%;
  border: 4px solid #e8f1fc;
`;

export const ImageContainer = styled.div`
  display: contents;
`;

export const ImageText = styled.a`
  font-family: Montserrat;
  font-size: 12px;
  background: #2a2b2b;
  color: white;
  text-align: center;
  position: relative;
  bottom: 1rem;
  border-radius: 1rem;
  padding: 6px;
  text-decoration: none;
  &:hover {
    background: #1d5fab;
  }
`;
