import React from "react";
import {
  CompetencesTitle,
  CompetencesWrapper,
  Line,
  ToolsCard,
  ToolsContainer,
} from "./Competences-style";
import Tools from "../../database/tools.json";

const Competences = () => {
  return (
    <CompetencesWrapper id="competences">
      <CompetencesTitle>
        COMPÉTENCES<span>CE QUE J'UTILISE</span>
      </CompetencesTitle>
      <Line></Line>
      <ToolsContainer>
        {Tools.map((tool) => (
          <ToolsCard key={tool.id}>
            <img src={tool.image} width="128" height="128" alt="Outil"></img>
          </ToolsCard>
        ))}
      </ToolsContainer>
    </CompetencesWrapper>
  );
};

export default Competences;
