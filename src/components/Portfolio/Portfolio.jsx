import React from "react";
import styled from "styled-components";

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
  background: #5b5963;
  width: 55px;
  height: 1px;
  margin: 30px auto;
`;

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <PortfolioTitle>
        PORTFOLIO<span>MES PROJETS</span>
      </PortfolioTitle>
      <Line></Line>
    </PortfolioWrapper>
  );
};

export default Portfolio;
