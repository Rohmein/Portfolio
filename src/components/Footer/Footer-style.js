import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 50px;
  background: #f5f5f7;
  text-align: center;

  & p {
    margin-top: 20px;
    color: #333;
    font-size: 12px;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  padding: 5px;
  border: 1px solid #333;
  border-radius: 50%;
  color: #333;
`;
