import React from "react";
import { FooterWrapper, StyledIcon } from "./Footer-style";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <FooterWrapper>
        <a href="mailto:rohmein@live.fr">
          <StyledIcon icon={faEnvelope} />
        </a>
        <p>&copy; 2023 Romain HAUTEFEUILLE, Tous droits réservés.</p>
      </FooterWrapper>
    </footer>
  );
};

export default Footer;
