import styled from "styled-components";

export const CalendarContainer = styled.div`
  margin-top: 50%;
  @media (min-width: 768px) {
    margin-top: 0;
    display: flex;
  }
`

//MobileNav
export const NavCircle =styled.div`
display: flex;
@media (min-width: 768px) {
  display: none;
}
`;
