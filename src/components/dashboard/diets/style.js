import styled from "styled-components";

//Main Styles
export const MainContent = styled.div`

`;

// Header styles
export const Header = styled.div`
  margin-bottom: 3rem;
  margin-left: 321px;
`;

export const Title = styled.h1`
  font-size: 36px;
`;

// Card styles

export const CardContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 2rem;
  }
`;


export const CardBody = styled.div`
  background: white;
  width: 300px;
  margin-top: 30%;
  // margin-bottom: 15px;
  border-radius: 5px;
  @media (min-width: 600px) {
    margin-top: 20%;
  }
  @media (min-width: 768px) {
    margin-right: 10px;
    align-self: normal;
    margin-top: 0%;
    margin-bottom: 2%;
  }
`;
export const MediaContent = styled.img`
  height: 250px;
  width: 100%;
`;

export const CardDescription = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

export const CardCategory = styled.p`
  color: black;
  background: white;
  padding: 0.5rem;
  position: relative;
  top: 1rem;
  left: 12.8rem;
  width: 80px;
  text-align: center;
`;

export const CardTitle = styled.p`
  font-size: 20px;
  margin: 1rem 0rem 1rem 10px;
`;

export const WorkoutLength = styled.p`
  font-size: 20px;
  background: #277fe5;
  border-radius: 5px;
  width: 75px;
  display: flex;
  justify-content: center;
  padding: 5px;
  margin-left: 30px;
  color: white;
`;

//MobileNav
export const NavCircle =styled.div`
@media (min-width: 768px) {
  display: none;
}
`;
