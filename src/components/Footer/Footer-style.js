import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  position: relative;
  padding: 50px;
  background: #f5f5f7;
  text-align: center;

  & p {
    margin-top: 20px;
    color: #333;
    font-size: 12px;
  }
`;

export const Envelop = styled(FontAwesomeIcon)`
  padding: 5px;
  border: 1px solid #333;
  border-radius: 50%;
  color: #333;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.4);
  }
`;

export const Arrow = styled(FontAwesomeIcon)`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  width: 30px;
  height: 30px;
  padding: 4px;
  font-size: 20px;
  border-radius: 3px;
  background: #333;
  color: #ffffff;
  transition: transform 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }

  @media (max-width: 767px) {
    width: 25px;
    height: 25px;
  }
`;
