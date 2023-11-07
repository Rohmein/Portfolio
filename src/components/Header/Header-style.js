import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  color: #5b5963;
  padding: 8px 0;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  box-shadow: -6px 10px 40px rgba(0, 0, 0, 0.06);
  z-index: 1000;
`;

export const HeaderTitle = styled.h1`
  cursor: default;
  font-size: 17px;
  letter-spacing: 2px;
  color: #5b5963;
`;

export const StyledLink = styled.a`
  padding: 12px 10px;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 2px;
  color: #5b5963;
  transition: 200ms;

  &:hover {
    background: #333;
    color: #ffffff;
  }
`;
