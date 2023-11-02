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
  margin: 30px auto;
  background: #5b5963;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ProjectsCard = styled.div`
  text-align: left;
  background: #f5f5f7;
  width: 100%;
  height: 400px;
`;
