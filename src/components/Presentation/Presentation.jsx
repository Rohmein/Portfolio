import React from "react";
import {
  PresentationWrapper,
  PresentationPicture,
  PresentationContent,
  PresentationTitle,
  PresentationText,
  Line,
} from "./Presentation-style";
import Picture from "../../assets/pictures/romain.webp";
import CV from "../../assets/documents/cv_romain_hautefeuille.pdf";

const Presentation = () => {
  return (
    <PresentationWrapper id="presentation">
      <PresentationPicture
        src={Picture}
        width="250"
        height="250"
        alt="Romain Hautefeuille"
      />
      <PresentationContent>
        <PresentationTitle>
          PRÉSENTATION<span>À PROPOS DE MOI</span>
        </PresentationTitle>
        <Line></Line>
        <PresentationText>
          J'ai longtemps pensé que je ne ferai jamais le métier qui me
          correspond jusqu'en 2022 ou je me suis découvert une passion pour le
          <strong> développement Web</strong>.
        </PresentationText>
        <br />
        <PresentationText>
          Après avoir commencé mon apprentissage en autodidacte j'ai suivi le
          parcours de formation "<strong>Intégrateur Web</strong>"
          d'OpenClassrooms avec succès et mon souhait est maintenant de
          développer mes capacités et de les professionnaliser.
        </PresentationText>
        <br />
        <PresentationText>
          Pour voir mon CV c'est{" "}
          <a href={CV} target="_blank" rel="noopener noreferrer">
            par ici
          </a>
          .
        </PresentationText>
      </PresentationContent>
    </PresentationWrapper>
  );
};

export default Presentation;
