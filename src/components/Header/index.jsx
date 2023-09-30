import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  padding: 8px 0;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
`;

const HeaderTitle = styled.h1`
  cursor: default;
  font-size: 17px;
  letter-spacing: 2px;
  color: #5b5963;
`;

const StyledLink = styled(Link)`
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

const Header = () => {
  return (
    <NavContainer>
      <div>
        <HeaderTitle>R.HAUTEFEUILLE</HeaderTitle>
      </div>
      <div>
        <StyledLink to="/">ACCUEIL</StyledLink>
        <StyledLink to="/projects">PROJETS</StyledLink>
        <StyledLink to="/projects">COMPÉTENCES</StyledLink>
        <StyledLink to="/contact">CONTACT</StyledLink>
        <StyledLink to="/about">MON CV</StyledLink>
      </div>
    </NavContainer>
  );
};

export default Header;
