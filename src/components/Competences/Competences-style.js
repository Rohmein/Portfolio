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
  background: #5b5963;
  width: 55px;
  height: 1px;
  margin: 50px auto;
`;

export const ToolsContainer = styled.div`
  display: flex;
  align-items: center;

  & #office {
    width: 30%;
    filter: blur(3px);
  }

  & #tools-cards {
    width: 70%;
    display: flex;
    gap: 15px;
  }
`;

export const ToolsCard = styled.div`
  padding: 20px;
  width: 60%;
  display: flex;
  background: white;
  box-shadow: -6px 10px 40px rgba(0, 0, 0, 0.06);
`;
