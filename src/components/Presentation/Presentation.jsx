import React from "react";
import styled from "styled-components";
import Picture from "../../assets/images/romain.jpg";

const HomeWrapper = styled.div`
  padding: 100px 0 100px;
  text-align: center;
  background: #f5f5f7;
`;

const HomeContent = styled.div`
  max-width: 1000px;
`;

const HomeTitle = styled.h2`
  cursor: default;
  position: relative;
  margin-bottom: 50px;
  font-size: 30px;
  font-weight: 300;
  letter-spacing: 5px;
  & span {
    position: absolute;
    top: -40px;
    right: 0;
    left: 0;
    font-size: 80px;
    font-weight: 800;
    opacity: 0.06;
    z-index: 0;
  }
`;

const HomeText = styled.p`
  font-size: 21px;
  font-weight: 300;
  line-height: 1.4;
  & a {
    text-decoration: none;
    color: #49e2d6;
    transition: 200ms;
    &:hover {
      color: pink;
    }
  }
`;

const HomePicture = styled.img`
  margin-bottom: 70px;
  max-width: 250px;
  border-radius: 50%;
  box-shadow: 1px 1px 12px;
`;

const Line = styled.div`
  background: #5b5963;
  width: 55px;
  height: 1px;
  margin: 30px auto;
`;

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
