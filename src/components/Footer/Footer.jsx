import React from "react";
import { Arrow, FooterWrapper, Envelop } from "./Footer-style";
import { faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <FooterWrapper>
      <a href="mailto:rohmein@live.fr" alt="Image pour m'envoyer un mail">
        <Envelop icon={faEnvelope} />
      </a>
      <p>&copy; 2023 Romain HAUTEFEUILLE, Tous droits réservés.</p>
      <Arrow icon={faArrowUp} onClick={scrollToTop} />
    </FooterWrapper>
  );
};

export default Footer;
