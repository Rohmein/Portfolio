import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 50px;
  background: #333;
  text-align: center;

  & p {
    margin-top: 20px;
    color: #f5f5f7;
    font-size: 12px;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  padding: 5px;
  border: 1px solid #f5f5f7;
  border-radius: 50%;
  color: #f5f5f7;
`;
