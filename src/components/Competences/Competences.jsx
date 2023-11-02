import React from "react";
import {
  CompetencesTitle,
  CompetencesWrapper,
  Line,
  ToolsCard,
  ToolsContainer,
} from "./Competences-style";
import Tools from "../../database/tools.json";
// import Office from "../../assets/images/Office.jpg";

const Competences = () => {
  return (
    <CompetencesWrapper>
      <CompetencesTitle>
        COMPÉTENCES<span>CE QUE J'UTILISE</span>
      </CompetencesTitle>
      <Line></Line>
      <ToolsContainer>
        {/* <img src={Office} id="office" alt="Bureau" /> */}
        <div id="tools-cards">
          {Tools.map((tool) => (
            <ToolsCard key={tool.id}>
              <img src={tool.image} alt="Outil"></img>
            </ToolsCard>
          ))}
        </div>
      </ToolsContainer>
    </CompetencesWrapper>
  );
};

export default Competences;
