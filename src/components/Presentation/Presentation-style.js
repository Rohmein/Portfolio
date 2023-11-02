import styled from "styled-components";

export const PresentationWrapper = styled.div`
  padding: 100px 0 100px;
  text-align: center;
  background: #f5f5f7;
`;

export const PresentationContent = styled.div`
  max-width: 1000px;
`;

export const PresentationPicture = styled.img`
  margin-bottom: 70px;
  max-width: 250px;
  border-radius: 50%;
  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.2);
`;

export const Line = styled.div`
  background: #5b5963;
  width: 55px;
  height: 1px;
  margin: 50px auto;
`;

export const PresentationTitle = styled.h2`
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
`;

export const PresentationText = styled.p`
  color: #5b5963;
  font-size: 21px;
  line-height: 1.4;
  & a {
    text-decoration: none;
    color: #49e2d6;
    transition: O.2s;
    &:hover {
      color: pink;
    }
  }
`;
