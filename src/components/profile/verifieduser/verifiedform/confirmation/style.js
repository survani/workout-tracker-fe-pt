import styled from "styled-components";

// ----- Page Containers -----

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-top: 5rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 0rem;
  }
`;

export const LeftSideContent = styled.div`
  @media (min-width: 768px) {
    margin: 8rem 23rem 0rem 0rem;
  }
`;

export const RightSideContent = styled.div`
  @media (min-width: 768px) {
    margin-top: 4rem;
  }
`;

// ----- Page Text -----

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
  }
`;

// ----- Page Buttons -----

export const Button = styled.button`
  font-size: 18px;
  margin: 3rem 0rem 3rem 0rem;
  color: #277fe5;
  background: none;
  border: 2px solid #277fe5;
  border-radius: 15px;
  width: 316px;
  height: 56px;
  &:hover {
    background: #277fe5;
    color: white;
  }
  @media (min-width: 768px) {
  margin: 10rem 0rem 0rem 0rem;
  }
`;
