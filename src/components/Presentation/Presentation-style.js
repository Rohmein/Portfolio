import styled from "styled-components";

export const PresentationWrapper = styled.div`
  padding: 100px 0 100px;
  text-align: center;
  background: #333;
`;

export const PresentationContent = styled.div`
  max-width: 1000px;
  padding: 40px;
`;

export const PresentationPicture = styled.img`
  margin-bottom: 70px;
  max-width: 250px;
  border-radius: 50%;
  box-shadow: 0 0 15px 2px rgba(255, 255, 255, 0.5);
`;

export const Line = styled.div`
  background: #f5f5f7;
  width: 55px;
  height: 1px;
  margin: 50px auto;
`;

export const PresentationTitle = styled.h2`
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

export const PresentationText = styled.p`
  color: #f5f5f7;
  font-size: 21px;
  line-height: 1.4;

  & a {
    text-decoration: none;
    color: pink;
    transition: O.2s;

    &:hover {
      color: #49e2d6;
    }
  }

  @media (max-width: 685px) {
    font-size: 16px;
  }
`;
