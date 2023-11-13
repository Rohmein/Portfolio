import styled from "styled-components";

export const CompetencesWrapper = styled.div`
  padding: 100px 0 100px;
  text-align: center;
  background: #333;
`;

export const CompetencesTitle = styled.h2`
  cursor: default;
  position: relative;
  margin-bottom: 50px;
  color: #f5f5f7;
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
    opacity: 0.15;
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
  background: #f5f5f7;
  width: 55px;
  height: 1px;
  margin: 50px auto;
`;

export const ToolsContainer = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const ToolsCard = styled.div`
  margin: 0;
  padding: 30px;
  width: 100%;
  background: white;
  box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.5);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
    filter: invert(100%);
  }
`;
