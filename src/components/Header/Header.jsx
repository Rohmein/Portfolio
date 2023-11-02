import React from "react";
import { NavContainer, HeaderTitle, StyledLink } from "./Header-style";

const Header = () => {
  return (
    <header>
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
    </header>
  );
};

export default Header;
