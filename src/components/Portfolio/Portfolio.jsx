import React from "react";
import { Link } from "react-router-dom";
import {
  PortfolioWrapper,
  PortfolioTitle,
  Line,
  ProjectsContainer,
  ProjectsCard,
  ProjectContent,
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
          <ProjectsCard to={project.url} key={project.id}>
            <div className="overlay"></div>
            <img src={project.image} alt="Projet" />
            <ProjectContent>
              <h3>{project.title}</h3>
              <p className="description">{project.description}</p>
              <p className="competences">{project.competences}</p>
              <Link to={project.url} className="project-link">
                Aller vers le projet
              </Link>
            </ProjectContent>
          </ProjectsCard>
        ))}
      </ProjectsContainer>
    </PortfolioWrapper>
  );
};

export default Portfolio;
