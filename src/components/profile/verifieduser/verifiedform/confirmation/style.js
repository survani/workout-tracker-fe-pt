import styled from "styled-components";

// ----- Page Containers -----

export const ContentContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
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
  @media (min-width: 768px) {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

// ----- Page Buttons -----

export const Button = styled.button`
  @media (min-width: 768px) {
  font-size: 18px;
    margin-top: 10rem;
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
`;
