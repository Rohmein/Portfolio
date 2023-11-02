import React from "react";
import {
  PortfolioWrapper,
  PortfolioTitle,
  Line,
  ProjectsContainer,
  ProjectsCard,
} from "./Portfolio-style";
import Projects from "../../database/projects.json";

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <PortfolioTitle>
        PORTFOLIO<span>MES PROJETS</span>
      </PortfolioTitle>
      <Line></Line>
      <ProjectsContainer>
        {Projects.map((project) => (
          <ProjectsCard key={project.id}>
            <img src={project.image} alt="Projet" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.competences}</p>
            {project.url}
          </ProjectsCard>
        ))}
      </ProjectsContainer>
    </PortfolioWrapper>
  );
};

export default Portfolio;
