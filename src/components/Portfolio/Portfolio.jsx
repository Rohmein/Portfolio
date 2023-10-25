import React from "react";
import styled from "styled-components";
import Projects from "../../database/projects.json";

const PortfolioWrapper = styled.div`
  padding: 100px 0 100px;
  text-align: center;
`;

const PortfolioTitle = styled.h2`
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

const Line = styled.div`
  width: 55px;
  height: 1px;
  margin: 30px auto;
  background: #5b5963;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ProjectsCard = styled.div`
  text-align: left;
  background: #f5f5f7;
  width: 100%;
  height: 400px;
`;

const Portfolio = () => {
  console.log(Projects);
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
