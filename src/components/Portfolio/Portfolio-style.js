import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  padding: 100px 0 100px;
  text-align: center;
`;

export const PortfolioTitle = styled.h2`
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

export const Line = styled.div`
  width: 55px;
  height: 1px;
  margin: 50px auto;
  background: #5b5963;
`;

export const ProjectsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 100px;
  gap: 15px;
`;

export const ProjectsCard = styled.div`
  position: relative;
  width: 100%;
  height: 500px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #333;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover .overlay {
    opacity: 0.6;
  }
`;

export const ProjectContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  opacity: 0;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }

  & * {
    color: #f5f5f7;
    padding: 0 50px;
  }

  & h3,
  p {
    cursor: default;
  }

  & h3 {
    font-size: 48px;
  }

  & p {
    font-size: 22px;
  }

  & .project-link {
    padding: 10px 20px;
    background: #333;
    border-radius: 25px;
    color: #f5f5f7;
    font-size: 18px;
    letter-spacing: 1.2px;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      background: #f5f5f7;
      color: #333;
    }
  }
`;
