import styled from "styled-components";

export const HomeWrapper = styled.div`
  padding: 100px 0 100px;
  text-align: center;
  background: #f5f5f7;
`;

export const HomeContent = styled.div`
  max-width: 1000px;
`;

export const HomeTitle = styled.h2`
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

export const HomeText = styled.p`
  font-size: 21px;
  font-weight: 300;
  line-height: 1.4;
  & a {
    text-decoration: none;
    color: #49e2d6;
    transition: 200ms;
    &:hover {
      color: pink;
    }
  }
`;

export const HomePicture = styled.img`
  margin-bottom: 70px;
  max-width: 250px;
  border-radius: 50%;
  box-shadow: 1px 1px 12px;
`;

export const Line = styled.div`
  background: #5b5963;
  width: 55px;
  height: 1px;
  margin: 30px auto;
`;
