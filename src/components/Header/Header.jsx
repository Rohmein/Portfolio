import React, { useEffect, useState } from "react";
import {
  NavContainer,
  HeaderTitle,
  NavLinks,
  NavLink,
  Burger,
  BurgerBar,
} from "./Header-style";
import CV from "../../assets/documents/cv_romain_hautefeuille.pdf";

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

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <NavContainer>
      <div>
        <HeaderTitle>R.HAUTEFEUILLE</HeaderTitle>
      </div>
      <NavLinks className={showLinks ? "show-nav" : ""}>
        <NavLink
          href="#presentation"
          className={activeLink === "presentation" ? "active" : ""}
          onClick={(e) => {
            activeAnchor(e);
            handleShowLinks();
          }}
        >
          PRÉSENTATION
        </NavLink>
        <NavLink
          href="#portfolio"
          className={activeLink === "portfolio" ? "active" : ""}
          onClick={(e) => {
            activeAnchor(e);
            handleShowLinks();
          }}
        >
          PROJETS
        </NavLink>
        <NavLink
          href="#competences"
          className={activeLink === "competences" ? "active" : ""}
          onClick={(e) => {
            activeAnchor(e);
            handleShowLinks();
          }}
        >
          COMPÉTENCES
        </NavLink>
        <NavLink href="mailto:rohmein@live.fr">CONTACT</NavLink>
        <NavLink href={CV} target="_blank" rel="noopener noreferrer">
          MON CV
        </NavLink>
        <Burger onClick={handleShowLinks}>
          <BurgerBar className="burger-bar"></BurgerBar>
        </Burger>
      </NavLinks>
    </NavContainer>
  );
};

export default Header;
