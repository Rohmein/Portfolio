import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  padding: 100px 0 100px;
  text-align: center;
`;

export const PortfolioTitle = styled.h2`
  cursor: default;
  position: relative;
  margin-bottom: 50px;
  color: #5b5963;
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

  @media (max-width: 855px) {
    font-size: 25px;

    & span {
      top: -30px;
      font-size: 60px;
    }
  }

  @media (max-width: 685px) {
    font-size: 14px;

    & span {
      top: -12px;
      font-size: 28px;
    }
  }

  @media (max-width: 410px) {
    font-size: 25px;

    & span {
      display: none;
    }
  }
`;

export const Line = styled.div`
  width: 55px;
  height: 1px;
  margin: 50px auto;
  background: #5b5963;
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: 20px;
  margin: 0 20px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectsCard = styled.div`
  position: relative;
  width: 100%;
  min-height: 400px;

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
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
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
    font-size: 32px;
  }

  & p {
    font-size: 20px;
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

  @media (max-width: 1280px) {
    gap: 20px;

    & * {
      padding: 0 20px;
    }

    & h3 {
      font-size: 30px;
    }

    & p {
      font-size: 18px;
    }

    & .project-link {
      padding: 8px 16px;
      font-size: 18px;
      letter-spacing: 1.1px;
    }
  }

  @media (max-width: 600px) {
    text-align: center;
    gap: 50px;

    & .competences {
      display: none;
    }

    & .project-link {
      letter-spacing: 0;
    }
  }
`;
