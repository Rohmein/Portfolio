import React, { useEffect, useState } from "react";
import { NavContainer, HeaderTitle, StyledLink } from "./Header-style";

const Header = () => {
  const [activeLink, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const presentation = document.getElementById("presentation");
      const portfolio = document.getElementById("portfolio");
      const competences = document.getElementById("competences");

      const sections = [presentation, portfolio, competences];
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        if (
          section &&
          scrollPosition >= section.offsetTop - 100 &&
          scrollPosition < section.offsetTop + section.offsetHeight - 100
        ) {
          setActiveSection(section.id);
        }
      });

      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;

      if (scrollPosition + windowHeight === documentHeight) {
        setActiveSection("competences");
        return;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeAnchor = (e) => {
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
          <StyledLink
            href="#presentation"
            className={activeLink === "presentation" ? "active" : ""}
            onClick={activeAnchor}
          >
            PRÉSENTATION
          </StyledLink>
          <StyledLink
            href="#portfolio"
            className={activeLink === "portfolio" ? "active" : ""}
            onClick={activeAnchor}
          >
            PROJETS
          </StyledLink>
          <StyledLink
            href="#competences"
            className={activeLink === "competences" ? "active" : ""}
            onClick={activeAnchor}
          >
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
