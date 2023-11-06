import styled from "styled-components";

export const CompetencesWrapper = styled.div`
  padding: 100px 0 100px;
  text-align: center;
  background: #f5f5f7;
`;

export const CompetencesTitle = styled.h2`
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
  background: #5b5963;
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
  box-shadow: -6px 10px 40px rgba(0, 0, 0, 0.06);
`;
