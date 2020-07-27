import styled from "styled-components";

// Upper Navigation

export const Navigation = styled.nav`
  display: none;
  @media (min-width: 768px) {
    background: #277fe5;
    display: flex;
    padding: 2rem;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    color: #1d2026;
  }
`;

export const LogoText = styled.h1`
  @media (min-width: 768px) {
    font-size: 24px;
    font-weight: bold;
    color: #f6f6f6;
    margin-left: 0.5rem;
  }
`;

export const RightSide = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

// Sub Navigation
export const SubNav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: block;
    border-bottom: 2px solid #dddddd;
    margin-top: 8rem;
  }
`;

export const Links = styled.a`
  @media (min-width: 768px) {
    margin-left: 3rem;
    line-height: 50px;
    font-size: 18px;
    font-weight: 500;
  }
`;

// Search Bar
export const Input = styled.input`
  @media (min-width: 768px) {
    width: 414px;
    border-radius: 29px;
    background: #f6f6f6;
    border: none;
    padding: 10px;
  }
`;

export const SearchIcons = styled.img`
  @media (min-width: 768px) {
    position: relative;
    right: 3rem;
  }
`;
