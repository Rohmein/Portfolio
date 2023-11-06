import React from "react";
import { NavContainer, HeaderTitle, StyledLink } from "./Header-style";

const Header = () => {
  const sectionClick = (e) => {
    e.preventDefault();

    const sectionId = e.target.getAttribute("href");
    const section = document.querySelector(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <NavContainer>
        <div>
          <HeaderTitle>R.HAUTEFEUILLE</HeaderTitle>
        </div>
        <div>
          <StyledLink href="#presentation" onClick={sectionClick}>
            ACCUEIL
          </StyledLink>
          <StyledLink href="#portfolio" onClick={sectionClick}>
            PROJETS
          </StyledLink>
          <StyledLink href="#competences" onClick={sectionClick}>
            COMPÉTENCES
          </StyledLink>
          <StyledLink href="mailto:rohmein@live.fr">CONTACT</StyledLink>
          <StyledLink href="/about">MON CV</StyledLink>
        </div>
      </NavContainer>
    </header>
  );
};

export default Header;
