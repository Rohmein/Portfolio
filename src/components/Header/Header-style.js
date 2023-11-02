import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  padding: 8px 0;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
  cursor: default;
  font-size: 17px;
  letter-spacing: 2px;
  color: #5b5963;
`;

export const StyledLink = styled(Link)`
  padding: 12px 10px;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 2px;
  color: #5b5963;
  transition: 200ms;
  &:hover {
    background: #5b5963;
    color: #ffffff;
  }
`;
