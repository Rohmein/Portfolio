import React from "react";
import {
  HomeWrapper,
  HomePicture,
  HomeContent,
  HomeTitle,
  Line,
  HomeText,
} from "./Presentation-style";
import Picture from "../../assets/images/romain.jpg";

const Presentation = () => {
  return (
    <HomeWrapper>
      <HomePicture src={Picture} alt="Romain Hautefeuille" />
      <HomeContent>
        <HomeTitle>
          PRÉSENTATION<span>À PROPOS DE MOI</span>
        </HomeTitle>
        <Line></Line>
        <HomeText>
          J'ai longtemps pensé que je ne ferai jamais le métier qui me
          correspond jusqu'en 2022 ou je me suis découvert une passion pour le
          <strong> développement Web</strong>.
        </HomeText>
        <br />
        <HomeText>
          Après avoir commencé mon apprentissage en autodidacte j'ai suivi le
          parcours de formation "<strong>Intégrateur Web</strong>"
          d'OpenClassrooms avec succès et mon souhait est maintenant de
          développer mes capacités et de les professionnaliser.
        </HomeText>
        <br />
        <HomeText>
          Pour voir mon CV c'est{" "}
          <a href="https://openclassrooms.com/fr/dashboard/courses">par ici</a>.
        </HomeText>
      </HomeContent>
    </HomeWrapper>
  );
};

export default Presentation;
